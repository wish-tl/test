CREATE TABLE IF NOT EXISTS customs (
    custom_code TEXT PRIMARY KEY,
    --账单结算对象编码
    custom_name TEXT NOT NULL UNIQUE,
    --账单结算对象名称
    export_receipt_detail INTEGER NOT NULL,
    --导出签收明细
    export_collection_detail INTEGER NOT NULL,
    --导出揽收明细
    single_charge REAL NOT NULL -- 冲单价
);

CREATE TABLE IF NOT EXISTS prices (
    id INTEGER PRIMARY KEY,
    custom_code TEXT NOT NULL,
    --账单结算对象编码
    area_name TEXT NOT NULL,
    -- 地区
    first_weight_fee REAL,
    -- 首重价
    start_price REAL,
    --低于首重价格
    start_weight REAL,
    -- 续重起算重量
    renewal_fee REAL,
    -- 续重费
    weightDeal TEXT,
    -- 重量处理
    weight_30_fee REAL,
    -- 超过30公斤价格
    UNIQUE (custom_code, area_name)
);

CREATE TABLE IF NOT EXISTS "special_price" (
    "id" INTEGER PRIMARY KEY,
    "custom_code" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "start_weight" REAL NOT NULL,
    "end_weight" REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS regions (
    province_name TEXT PRIMARY KEY,
    area_name TEXT NOT NULL,
    is_other INTEGER DEFAULT 0
);