MANIFESTS PATH: ~/eks-setup/manifests

Apply order (run after 'aws eks update-kubeconfig --name my-eks-cluster'):
1) kubectl apply -f gp3-storageclass.yaml
2) kubectl apply -f postgres-namespace.yaml
3) kubectl apply -f postgres-secret.yaml    # edit secret values if needed
4) kubectl apply -f postgres-service.yaml
5) kubectl apply -f postgres-statefulset.yaml
   kubectl -n database get sts,pods,pvc -o wide
6) kubectl apply -f app-namespace.yaml
7) kubectl -n app create secret docker-registry dockerhub-secret --docker-server=https://index.docker.io/v1/ --docker-username="mohammadimran0186" --docker-password="<DOCKERHUB_PASSWORD>" --docker-email="you@example.com"
8) kubectl apply -f app-configmap.yaml
9) kubectl apply -f app-secret.yaml    # or create from postgres-secret values
10) kubectl apply -f app-deployment.yaml
11) kubectl apply -f app-service.yaml
12) kubectl -n app rollout status deployment/sample-app
13) (optional) install ingress-nginx and then:
     kubectl apply -f app-ingress.yaml
