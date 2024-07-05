#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>

void main(){
    int sockfd,n;
    struct sockadder_in servadder;
    sockfd=socket(AF_INET,SOCK_STREAM,0);
    if (sockfd<0){
        printf("Error in socket creation\n");
        exit(0);
    }
    servadder.sin_family=AF_INET;
    servadder.sin_port=htons(8080);
    servadder.sin_addr.s_addr=INADDR_ANY;
    if(bind(sockfd,(struct sockaddr*)&servaddr,sizeof(servadder))<0){
        printf("Error in connection");
        exit(0);
    }
    listen(sockfd,3);
    int len=sizeof(servadder);
    connfd=accept(sockfd,(struct servadder*)&servadder,&len);
    if connfd<0{
        printf("Error in connection");
        exit(0);
    }
       while(1){
        char buff[100];
        read(connfd,buff,100);
        printf("Message from client: %s\n",buff);
        if(strncmp("exit",buff,4)==0){
            break;
        }
        printf("Enter message: ");
        fgets(buff,100,stdin);
        write(connfd,buff,strlen(buff));
        
    }
    close(sockfd);
    close(connfd);
}
