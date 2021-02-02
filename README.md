
## To build within the VM run 
    docker build --no-cache -t brendanrobert1/rings-site-image  .

## To run within VM and expose container port (C) to host port (H) run:  
    docker run -p <H>:<C> -it brendanrobert1/rings-site-image

## To run and expose host ip to container
    docker run --rm --add-host host.docker.internal:host-gateway -d  brendanrobert1/rings-site-image
## To expose container port to host port run
    run 'nano /etc/nginx/sites-available-default'
    change the port in the location /{} to localhost:<H>
    run 'systemctl restart nginx'
    run 'pm2 save'

## To enter bash of running contianer
    docker exec -t conatiner-id bash

## To push to Docker Hub

Login with docker login --username=my-username

Get docker image with `docker images`

Push to docker with 
    
    docker push <tag>

## Get the host ip within the container
    /sbin/ip route|awk '/default/ { print $3 }'

## Docker get the ip address of a docker container:
    docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
