# IAM
1. Create an "apex" policy

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "iam:CreateRole",
                "iam:CreatePolicy",
                "iam:AttachRolePolicy",
                "iam:PassRole",
                "lambda:GetFunction",
                "lambda:CreateFunction",
                "lambda:DeleteFunction",
                "lambda:InvokeFunction",
                "lambda:GetFunctionConfiguration",
                "lambda:UpdateFunctionConfiguration",
                "lambda:UpdateFunctionCode",
                "lambda:CreateAlias",
                "lambda:UpdateAlias",
                "lambda:GetAlias",
                "lambda:ListVersionsByFunction",
                "logs:FilterLogEvents",
                "cloudwatch:GetMetricStatistics"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```

2. Create an "apex" group, attach the policy
3. Create an "apex" user, with programatic credentials, add to group
4. Create an "apex" role, attach the policy

# Local
1. Setup aws credentials to use apex user
   1. `brew install awscli`
   2. `aws configure --profile apex`
   3. Answer questions using keys from apex user credentials.
2.  Update project.json to use "apex" role ARN
