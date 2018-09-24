# StatsD server with CloudWatch backend

This container runs a StatsD server that periodically flushes its metrics to AWS CloudWatch.

Uses:

* [github.com/etsy/statsd](https://github.com/etsy/statsd)
* [github.com/camitz/aws-cloudwatch-statsd-backend](https://github.com/camitz/aws-cloudwatch-statsd-backend)

## Configuration

Via environment variables:

* `CLOUDWATCH_NAMESPACE`: CloudWatch namespace to send metrics to
  (optional, defaults to "AwsCloudWatchStatsdBackend")
* `PORT_UDP`
* `PORT_TCP`

Plus the usual AWS configuration env vars

* `AWS_REGION`
* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY_ID`

or instead of API keys

* `AWS_IAM_ROLE`: IAM role to retrieve credentials for
