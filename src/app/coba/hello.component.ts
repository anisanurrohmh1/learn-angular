import { Type } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { todo } from "../model/todo";

@Component({
    selector : 'app-hello',
    templateUrl : './hello.component.html'
    
})



export class HelloComponent implements OnInit{
    imgSrc: string = 'assets/1.png'
    imgAlt: string = ''
    color : string = 'blue'
    angka : number = 0
    
    address: string = "welcome in <strong> Jakarta </strong>"

    dataTodo: todo[] = []
    isDisable: boolean = true


    ngOnInit(): void {
       this.dataTodo = [
        { todo: 'cooking',
          desc: 'lunch',
            status: true
        },
        { todo: 'walking arround',
            desc: 'ragunan',
            status: false
        }
       ]
 
    }




    janganCoret(index: number){
        this.dataTodo[index].status = !this.dataTodo[index].status;
    }


    gaya = {
        color : 'yellow',
        fontSize : '20',
        fontWeight :'100'

    }


    ontyping(event: any):void{
        console.log(event);
        console.log(event.target.value);
        
    }

    increement(){
        this.angka++
    }

}