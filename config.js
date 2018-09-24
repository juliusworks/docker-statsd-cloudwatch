(function() {
	// Set base config
	const config = {
		cloudwatch: { },
		backends: [ 'cloudwatch-backend-for-statsd' ]
	}

	// Set namespace where all metrics should be sent
	const namespace = process.env.CLOUDWATCH_NAMESPACE || ''

	if(typeof namespace === 'string') {
		config.cloudwatch.namespace = namespace
	}

	// Set the AWS region
	const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || ''

	if(typeof region === 'string') {
		config.cloudwatch.region = region
	}

	// Set credentials to use
	const accessKeyId = process.env.AWS_ACCESS_KEY_ID || ''
	const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || ''
	const iamRole = process.env.AWS_IAM_ROLE || ''

	if(accessKeyId && secretAccessKey) {
		config.cloudwatch.accessKeyId = accessKeyId
		config.cloudwatch.secretAccessKey = secretAccessKey
	} else if(iamRole) {
		config.cloudwatch.iamRole = iamRole
	}

	return config
})()
