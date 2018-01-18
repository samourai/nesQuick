var channel, store, lang
isRegistration = false;
var arr = window.location.pathname.split('/');
arr.shift();

function init() {
    isRegesterStep();
    config();
}

function config() {
    if (arr.length > 0) {
        if (arr[0] === 'mosaic' || arr[0].length == 2) {
            channel = 'mosaic';
            if (arr[0] && arr[0].length == 2) store = arr[0];
            if (arr[1] && arr[1].length == 2) lang = arr[0];
        }
        else {
            if (arr[0] && arr[0] == 'mosaic') channel = 'mosaic';
            if (arr[0] && arr[0] == 'mobile') channel = 'mobile';
            if (arr[1] && arr[1].length == 2) store = arr[1];
            if (arr[2] && arr[2].length == 2) lang = arr[2];
        }
    }
}


function isRegesterStep() {
    if (document.getElementById('registration-layout-0') || document.getElementById('registration-layout-1') || document.getElementById('registration-layout-2') || document.getElementById('register-form')) {
        isRegistration = true;
    }
}


function fillForm() {

    init();

   /* if (localStorage && typeof localStorage.getItem('account1') == 'string') {
        alert(localStorage.getItem('account1'))
    } else {
        localStorage.setItem('account', 'test1');
    }*/

    if (!isRegistration) return false;

    if (channel === 'mosaic') {
        // alert('fill mosaic');
        fillDesktop();
    } else {
        //alert('fill mobile');
    }
}

function fillDesktop() {
    firstname = 'Rachid';
    lastname = 'Mounachit';
    taxnumber = '29505665539';
    emailprefix = 'test2016';
    postalcode = '12345';
    phonenumber = '0123456789';
    aleat = Math.floor((Math.random() * 100000) + 1);
    if (document.getElementById('ta-registration-contactName')) {
        document.getElementById('ta-registration-contactName').value = firstname + ' ' + lastname;
    }
    ;
    if (document.getElementById('ta-registration-companyName')) {
        document.getElementById('ta-registration-companyName').value = 'Nespresso';
    }
    ;
    if (document.getElementById('ta-registration-firstName')) {
        document.getElementById('ta-registration-firstName').value = firstname;
    }
    ;
    if (document.getElementById('ta-registration-lastName')) {
        document.getElementById('ta-registration-lastName').value = lastname;
    }
    ;
    if (document.getElementById('ta-registration-email')) {
        document.getElementById('ta-registration-email').value = emailprefix + '-' + aleat + '@yopmail.com';
    }
    ;
    if (document.getElementById('ta-registration-confirmationEmail')) {
        document.getElementById('ta-registration-confirmationEmail').value = emailprefix + '-' + aleat + '@yopmail.com';
    }
    ;
    if (document.getElementById('ta-registration-password')) {
        document.getElementById('ta-registration-password').value = '123456AA';
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('input', false, true);
        document.getElementById('ta-registration-password').dispatchEvent(evt);
    }
    ;
    if (document.getElementById('ta-registration-password-confirm')) {
        document.getElementById('ta-registration-password-confirm').value = '123456AA';
    }
    ;
    if (document.getElementById('ta-registration-taxNumber')) {
        document.getElementById('ta-registration-taxNumber').value = taxnumber;
    }
    ;

    if (document.getElementById('ta-registration-contactName')) {
        document.getElementById('ta-registration-contactName').value = firstname + ' ' + lastname;
    };
    if (document.getElementById('ta-registration-companyName')) {
        document.getElementById('ta-registration-companyName').value = 'Nespresso';
    };
    if (document.getElementById('ta-registration-firstName')) {
        document.getElementById('ta-registration-firstName').value = firstname;
    };
    if (document.getElementById('ta-registration-lastName')) {
        document.getElementById('ta-registration-lastName').value = lastname;
    };
    if (document.getElementById('ta-registration-email')) {
        document.getElementById('ta-registration-email').value = emailprefix + '-' + aleat + '@yopmail.com';
    };
    if (document.getElementById('ta-registration-confirmationEmail')) {
        document.getElementById('ta-registration-confirmationEmail').value = emailprefix + '-' + aleat + '@yopmail.com';
    };
    if (document.getElementById('ta-registration-password')) {
        document.getElementById('ta-registration-password').value = '123456AA';
    };
    if (document.getElementById('ta-registration-password-confirm')) {
        document.getElementById('ta-registration-password-confirm').value = '123456AA';
    }
    ;
    if (document.getElementById('ta-registration-taxNumber')) {
        document.getElementById('ta-registration-taxNumber').value = taxnumber;
    };


    if (document.getElementById('shippingAddress.addressDetailsDTO.phoneticName')) {
        document.getElementById('shippingAddress.addressDetailsDTO.phoneticName').value = firstname + ' ' + lastname;
    };
    if (document.getElementById('ta-registration-address-shipping-line1')) {
        document.getElementById('ta-registration-address-shipping-line1').value = 'Avenue de Rhodanie 40';
    };
    if (document.getElementById('ta-registration-address-shipping-line2')) {
        document.getElementById('ta-registration-address-shipping-line2').value = '399 Ruiguang Rd';
    };
    if (document.getElementById('ta-registration-address-shipping-zip')) {
        document.getElementById('ta-registration-address-shipping-zip').value = postalcode;
    };
    if (document.getElementById('ta-registration-address-shipping-city')) {
        document.getElementById('ta-registration-address-shipping-city').value = 'Lausanne';
    };
    if (document.getElementById('ta-registration-address-shipping-region')) {
        document.getElementById('ta-registration-address-shipping-region').getElementsByTagName('option')[1].selected = true;
    };
    if (document.getElementById('State')) {
        document.getElementById('State').getElementsByTagName('option')[1].selected = true;
    };
    if (document.getElementById('ta-registration-machine-dont-have')) {
        document.getElementById('ta-registration-machine-dont-have').checked = true;
        if (document.getElementById('ta-register-machine-technology-CLA'))
            document.getElementById('ta-register-machine-technology-CLA').checked = true;
            document.getElementById('ta-register-machine-technology-CLA').className += ' checked';
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('click', false, true);
        document.getElementById('ta-registration-machine-dont-have').dispatchEvent(evt);
        document.getElementsByClassName("first-button")[0].dispatchEvent(evt);
    };
    if (document.getElementById('ta-registration-address-shipping-phone1-number')) {
        document.getElementById('ta-registration-address-shipping-phone1-number').value = phonenumber;
    };
    if (document.getElementById('ta-tax-number')) {
        document.getElementById('ta-tax-number').value = taxnumber;
    };
    document.getElementById('ta-continue-bottom').click();
}

//javascript:{holderName='adam aza'; cardNumber='4111111111111111'; cryptogram='123'; if(document.getElementById('ta-payment-card-holderName')){document.getElementById('ta-payment-card-holderName').value=holderName; }; if(document.getElementById('ta-payment-card-number')){document.getElementById('ta-payment-card-number').value=cardNumber; }; if(document.getElementById('ta-payment-card-cryptogram')){document.getElementById('ta-payment-card-cryptogram').value=cryptogram; }; if(document.getElementById('ta-payment-expiry-month')){document.getElementById('ta-payment-expiry-month').getElementsByTagName('option')[3].selected=true; }; if(document.getElementById('ta-payment-expiry-year')){document.getElementById('ta-payment-expiry-year').getElementsByTagName('option')[3].selected=true; }; }; void(0)