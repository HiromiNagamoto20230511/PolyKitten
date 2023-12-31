// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PolyKitten is ERC20 {
	constructor() ERC20("PolyKitten", "POLYKITTEN") {
		_mint(msg.sender, 1000000000000000 * 10 ** decimals());
	}
}
