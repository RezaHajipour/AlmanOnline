const fs = require("fs");
const aws = require("aws-sdk");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("../secrets");
}

const Bucket = "alman";

const s3 = new aws.S3({
    accessKeyId: secrets.AWS_ACCESS_KEY_ID,
    secretAccessKey: secrets.AWS_SECRET_ACCESS_KEY,
});

function s3upload(request, response, next) {
    console.log("s3", request.file.path);
    if (!request.file) {
        console.log("s3 - missing file!");
        response.statusCode(400);
        return;
    }

    console.log(request.file);
    s3.putObject({
        Bucket,
        ACL: "public-read",
        Key: request.file.filename,

        Body: fs.createReadStream(request.file.path),
        ContentType: request.file.mimetype,
        ContentLength: request.file.size,
    })
        .promise()
        .then(() => {
            console.log("s3 - upload-successful");
            // go next!
            next();
        })
        .catch((error) => {
            console.log("s3 - error uploading", error);
            response.statusCode(500);
        });
}

module.exports = {
    Bucket,
    s3upload,
};
