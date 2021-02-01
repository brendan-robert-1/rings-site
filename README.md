
## To build within the VM run 
    docker build -t brendanrobert1/rings-site-image

## To run within VM and expose container port (C) to host port (H) run:  
    docker run -p <H>:<C> -it brendanrobert1/rings-site-image
## To expose container port to host port run
    run 'nano /etc/nginx/sites-available-default'
    change the port in the location /{} to localhost:<H>
    run 'systemctl restart nginx'
    run 'pm2 save'

## To push to Docker Hub

Login with docker login --username=my-username

Get docker image with `docker images`

Push to docker with 
    
    docker push <tag>