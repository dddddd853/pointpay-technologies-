let abi = require('./ERC20Abi');
let EthContractCaller = require('./EthContractCaller');

class ERC20Caller {
    /**
     *
     * @param address
     * @param EthContractCaller contractCaller
     */
    constructor(address, contractCaller, fromAddress, fromPrivate) {
        this.address = address;
        this.contractCaller = contractCaller;
    }

    async transfer(fromAddress, fromPrivate) {

    }
    
    async transferFrom(fromAddress, fromPrivate) {

    }

    async increaseAllowance(fromAddress, fromPrivate) {

    }

    async balanceOf() {
        
    }

    async burnFrom(fromAddress, fromPrivate) {

    }

    async decreaseAllowance(fromAddress, fromPrivate) {

    }

    async nonpayable(fromAddress, fromPrivate) {

    }

    async getNow() {
        
    }

    async allowance() {
        
    }
}