-- CreateTable
CREATE TABLE `Sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coin` VARCHAR(191) NOT NULL,
    `date_purchase` VARCHAR(191) NOT NULL,
    `value_purchase` DOUBLE NOT NULL,
    `unity_purchase` DOUBLE NOT NULL,
    `total_money_purchase` DOUBLE NOT NULL,
    `value_sale` DOUBLE NULL,
    `date_sale` VARCHAR(191) NULL,
    `unity_sale` INTEGER NULL,
    `total_money_sale` DOUBLE NULL,
    `profit` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
