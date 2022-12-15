let activeModal;

const wrapper = document.getElementById("wrapper");
wrapper.addEventListener('click', () => handleModal());

const modalClose = document.getElementsByClassName("close");
for(let close of modalClose){
    close.addEventListener('click', ()=> handleModal());
}


function handleModal(modal = false){
    if(modal){
        wrapper.classList.toggle('hidden');
        modal.classList.toggle('hidden');
        activeModal = modal;
    } else {
        console.log(activeModal)
        wrapper.classList.toggle('hidden');
        activeModal.classList.toggle('hidden');
        activeModal='';
    }
};