const inp=document.querySelector('#ipfield');
function display(a)
{
    inp.value+=a;
}
function result()
{
    document.querySelector('#ipfield').value=eval(inp.value);
}
function del()
{
    document.querySelector('#ipfield').value=inp.value.slice(0,-1);
}
function allclr()
{
    document.querySelector('#ipfield').value='';
}