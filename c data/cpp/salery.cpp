#include <stdio.h>
int main ()
{
	int a,b,c;
	b=a/15*100;
	c=a-1000;
	printf("Enter your salery");
	scanf("%d",&a);
	
	if(a>=20000)
	{
		printf("Your salery is %d",&b);
	}
	else{
	printf("Your salery is %d",c);
	}
}
