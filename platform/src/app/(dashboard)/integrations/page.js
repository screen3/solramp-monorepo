'use client';
import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import MainComponent from '../../components/MainComponent';
import { CopyIcon } from '../../components/IconComponent';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';
import { Textarea } from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';


const Integrations = () => {
  const Text = `// SPDX-License-Identifier: MIT  

    pragma solidity ^0.8.16;
    
    import "https://github.com/KlayOracle/klayoracle-monorepo/blob/development/oracle-contract/contracts/KlayOracleInterface.sol";
    
    contract OracleConsumerSample {
      address public immutable oracleAddress;
  
      uint256 public klayOutput;
  
      constructor(address _oracleAddress) {
          require(_oracleAddress != address(0));
          oracleAddress = _oracleAddress;
      }
  
      function swapUsdtoKlay() public returns (bool) {
          KlayOracleInterface oracle = KlayOracleInterface(oracleAddress);
  
          bool replied = oracle.newOracleRequest(
              this.swap.selector,
              address(this)
          );
  
          return replied;
      }
  
      function swap(uint256 _klayOutput) external {
          require(msg.sender == oracleAddress, "not allowed"); //ensure only Oracle contract can set price
          klayOutput = _klayOutput;
          //Swap usd to klay
      }
  }`;

  const [value, setValue] = React.useState(Text);
  const [copied, setCopied] = React.useState(false);
  const onChange = React.useCallback(({ target: { value } }) => {
    setValue(value);
    setCopied(true);
    toast.success('Successfully copied!')

  }, []);

  const onCopy = React.useCallback(() => {
    setCopied(true);
    toast.success('Successfully copied!')
  }, []);

  return (
    <div>
      <Toaster/>
      <PageTitle title={'Integrations'} />

      <MainComponent>
        <div className=" mb-4">
          <h3 className="text-center text-xl font-medium">Install Widget</h3>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-3 lg:py-5 w-full ">
            <div>
              <h4>To use solramp apk,</h4>
              <ul className="list-decimal	px-5">
                <li>Place this code before the &lt;/body&gt; tag</li>
                <li>
                  To trigger with a button on your website to take payments,
                  follow the directions on the{' '}
                  <Link href="/" className="underline text-[#1877F2]">
                    docs
                  </Link>{' '}
                  page.{' '}
                </li>
              </ul>
            </div>

            <div className="border border-[#DADADA] rounded-lg p-3 relative">
              <textarea
                onChange={onChange}
                rows={8}
                className="w-full py-3 px-3 resize-none focus:border-none focus-within:border-none active:border-none focus-visible:border-none focus:outline-none focus-within:outline-none active:outline-none focus-visible:outline-none"
                value={value} readOnly
              ></textarea>
              {/* <Textarea
                value={value}
                onChange={onChange}
                placeholder="Here is a sample placeholder"
                size="sm"
                resize={'none'}
              /> */}

              <CopyToClipboard
                onCopy={onCopy}
                options={{ message: 'Whoa!' }}
                text={value}
                className="text-sm rounded-lg absolute right-0 bottom-0 px-3 py-3 bg-white flex items-center gap-2 border-l border-t border-[#D0D5DD] text-[#A15DDF]"
              >
                <button className="">
                  <CopyIcon />
                  <span> {copied ? 'Copied' : 'Copy to Clipboard'}</span>
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </MainComponent>
    </div>
  );
};

export default Integrations;
