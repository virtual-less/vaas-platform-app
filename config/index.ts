export default{
    configServer:{
        // your etcd v3 config
        etcd:{
            endpoints:[process.env.VAAS_PLATFORM_ETCD_ENDPOINT || '127.0.0.1:2379'],
            username:process.env.VAAS_PLATFORM_ETCD_USERNAME || '',
            password:process.env.VAAS_PLATFORM_ETCD_PASSWORD || ''
        },
    },
    storageServer:{
        // your minio(s3) config
        minio:{
            endPoint: process.env.VAAS_PLATFORM_MINIO_HOST || '127.0.0.1',
            port: parseInt(process.env.VAAS_PLATFORM_MINIO_PORT) || 9000,
            useSSL:false,
            accessKey: process.env.VAAS_PLATFORM_MINIO_ACCESSKEY|| '',
            secretKey: process.env.VAAS_PLATFORM_MINIO_SECRETKEY || '',
            bucket: process.env.VAAS_PLATFORM_MINIO_BUCKET || 'vaas-bucket',
        }
    }
    
}