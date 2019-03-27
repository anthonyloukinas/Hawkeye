# Hawkeye
A docker swarm orchestrator project for enterprise environments. 

This project is in very early stages. It is not suitable for production or for any use until an 
official alpha release hits the repository.

[Insert Gif in Action Here]

**Features:**

* Docker Node to Backend communication 
    > Note: API/MQ app container running on the node
* Single Sign-on (AD, Ldap, Azure, any SSO provider like keycloak)
    * 2-Factor Authentication Support
* Repository of 1-click applications/workloads
    * Official repository that is maintained (by this project)
    * Local user defined templates
* Multi-tenancy support, including team and user isolation of applications workloads
* Audit Trail for every action
* Rolling updates to your swarm services
* (tbd) Built-in Grafana and metrics for environments

## Getting Started

**Installation**

[Install docs here]

## Contributing

You can develop locally, or through openshift.io/eclipse che environments. The only requirement
is that you have Node v11.0 or higher. This application will likely work completely with the LTS 10.0
release but I've yet to test it.

```bash
# Clone the code to your local machine
$ git clone https://github.com/anthonyloukinas/hawkeye.git

# Install dependencies
$ cd hawkeye && npm install

# Execute the development environment
$ npm start_development
```

