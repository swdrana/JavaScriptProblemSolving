#include<stdio.h>
int main(){
    int a[]=    {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
    int b[10]; //{5,4,3,2,1}
    for(int i=0, j=9; i<=9; i++,j--){
        b[j]=a[i];  //  b[4]=a[0]   b[3]=a[1]   b[2]=a[2]   b[1]=a[3]   b[0]=a[4]
    }
    for(int i=0; i<10; i++){
        a[i]=b[i];  
    }
    for(int i=0; i<=9; i++){
        //printing a array
        printf("%d ",a[i]);
    }
}