jQuery("input.tel")
  .mask("(99) 99999-999?9")
  .focusout(event => {  
      const target = event.currentTarget ? event.currentTarget : event.srcElement;
      const phone = target.value.replace(/\D/g, '');
      const element = $(target).unmask();
      if(phone.length > 10) {  
          element.mask("(99) 99999-999?9");  
      } else {  
          element.mask("(99) 9999-9999?9");  
      }  
  });