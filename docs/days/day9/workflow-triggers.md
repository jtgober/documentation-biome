# Github Action Workflow Triggers

Whenever we started with Playwright, they give us a nice starter workflow with the following triggers.

```yaml
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
```
`on` being the start of what triggers our workflow. `on` either a push or a pull_request to a `main` or `master` branch. There are of course other procedures we can use instead of on a push or pull request. In most cases, on a pull or push request may be enough, but its important to note a couple of others that have their own uses.

## Running on a schedule
Github actions allows you to run your workflow on a schedule using CRON based syntax. 

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'
```
For the above example. the workflow would dispatch every day at 5:30am and 5:30pm UTC.

For me, every time I look at CRON jobs i instantly forget what I'm looking at. To assist with this you can check out the below graph, and I also use this handy dandy website called [crontab](https://crontab.guru/). Which can help you put together something that suites you and the team.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

### Benefits of running on a schedule
* Consistency: Automated tests scheduled on a cron job will run at the specified intervals without fail, ensuring consistent and regular testing of the application.

* Time-saving: By scheduling automated tests on a cron job, the testers do not have to manually trigger the tests, saving time and increasing productivity.

* Improved reliability: By automating tests on a cron job, the testing process becomes more reliable, consistent, and predictable, reducing the risk of human error and improving the overall quality of the software.

## Manually dispatching a workflow
To be honest, I'm not a massive fan of having to manually run a pipeline. I feel it defeats the purpose of automation. Personally, I want to build my tests and pipeline to run consistently and reliably. That way if there is an issue, I know its not because of my tests, but instead there is a possible issue with the state of the application itself. However, there are *some* potential benefits. I also prefer to use this to supplement other workflow running methods.

### Adding workflow dispatch.
Adding the workflow dispatch is as simple as adding the `workflow_dispatch` trigger to the yaml file.

```yaml
on:
  workflow_dispatch: // [!code focus]
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
```

From here once we push out our code, we are able to access an additional command. From the `actions` menu in the left pane, there is the workflow of `playwright tests`. Clicking that will reveal the workflow dispatch.

![](/workflowDispatch.png)

On the far right there is of course the big ol green button that allows you to use the workflow.

![](/runWorkflow1.png)

Which brings us to the first benefit. The ability to run this workflow on any branch that contains this workflow. 


![](/runWorkflow.png)

If the branch does not contain the the same workflow a error message will prevent you from running it.
:::warning
Workflow does not exist or does not have a workflow_dispatch trigger in this branch.
:::

### Benefits of running with workflow dispatch

* Flexibility
* Debugging
* Human judgment

### Disadvantages

I just wanted to restate this. I don't like having to manually run pipelines. I feel you can achieve the same  benefits by having a good branching strategy, and reliable, stable tests.