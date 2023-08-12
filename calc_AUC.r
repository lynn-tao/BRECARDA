# RScript to calculate AUC from the PRS score and phenotype files

library(data.table)
library(pROC)
library(survival)
library(stringr)

source('/gpfs/gibbs/pi/zhao/lt575/cancer_prs/code/function.R')
gwas <- fread('/gpfs/gibbs/pi/zhao/lt575/cancer_prs/data/gwas_info.csv')
cancer <- gwas$Cancer
files <- list.files('/gpfs/gibbs/pi/zhao/lt575/cancer_prs/data/annopred/tier2','profile')

setwd('/gpfs/gibbs/pi/zhao/lt575/cancer_prs/data/annopred/tier2')

getAll <- function(pheno,phe_da){
  link <- files[grep(pheno,files)]
  auc <- c()
  formu <- formula(paste0('Surv(age_end,phe) ~ SCORE'))
  ukbb <- fread(phe_da)
  colnames(ukbb)[7] <- 'phe'
  for(l in link){
    input <- fread(l)
    all <- merge(input,subset(ukbb,select=c('eid','age_end','phe')),
                      by.x='FID',by.y='eid')
    all$phe[all$phe>0] <- 1
    add <- CV.mean.auc(all,formu,'phe') 
    auc <- rbind(auc,c(add,str_replace(l,'.profile','')))
  }
  return(auc)
}

index <- c('BC','prostate','lung','ovarian')
phe_da <- paste0('ukbb_',index,'.tsv')
phe_da <- paste0('/ysm-gpfs/pi/zhao-data/yy496/ukbb_pheno/ukbb_hesin_update/package/',
                phe_da)

auc_out <- c()
add <- getAll(cancer[1],phe_da[1])
auc_out <- rbind(auc_out,add)
colnames(auc_out) <- c('auc','up','low','cancer')
write.csv(auc_out,'/gpfs/gibbs/pi/zhao/lt575/cancer_prs/results/prs_select/annopred_bc_auc.csv',
                row.names=F)
