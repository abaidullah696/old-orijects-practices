org 100h

mov ah,09h
mov dx,offset message

int 21h
mov ah,4ch
int 21h

ENDP
message db "HELO WORLD$"
end main
 ret