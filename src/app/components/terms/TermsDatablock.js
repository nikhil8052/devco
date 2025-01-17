"use client"; // Add this at the top
import React from 'react';
import Image from 'next/image';

const TermsDatablock = () => {
  return (
    <div className="Skill_banner terms_banner main-service-banner relative w-full pt-5 xl:pt-10 pb-10 lg:pb-20  text-customwhite">
      <div className="container mx-auto t">
        <div className='terms_block_wrapper'>
            <div className='terms_block'>
                <p>The “Nead, LLC Network” refers to Nead, LCC (“NEAD”), the member firms of NEAD, and their related entities and websites. Each individual country, regional, or practice specific website within NEAD (including DEV.co) is provided by an individual entity within the Nead, LLC Network.</p>

                <p>Nead, LLC, is providing this Website and is referred to in these Terms of Use as “we”, “us”, or “our”. Although parts of these Terms of Use may reference other websites in the Nead, LLC Network, these Terms of Use are only between you and us and not with any of those other entities or websites.</p>
            </div>
            <div className='terms_block'>
              <h2>Use of Content; Restrictions; Privacy Statement</h2>
                <p>Unless otherwise indicated in the relevant content, and on the condition that you comply with all of your obligations under these Terms of Use, you are authorized to view, copy, print, and distribute (but not modify) the content on this Website; provided that (i) such use is for informational, noncommercial purposes only, and (ii) any copy of the content that you make must include the copyright notice or other attribution (including backlinks) associated with the content.</p>

                <p>You are not authorized to copy or use any software, proprietary processes, or technology embodied or described in this Website.
                You will comply with all applicable laws in accessing and using this Website</p>

                <p>You acknowledge that we may use your personal information and data according to our Privacy Statement and Cookie Notice, which are incorporated herein by this reference. You hereby agree to the terms of our Privacy Statement and Cookie Notice, including any obligations imposed on you therein.</p>
            </div>
            <div className='terms_block'>
              <h2>Intellectual Property Rights; No use of Nead, LLC names or logos</h2>
                <p>Unless otherwise indicated, the content on this Website is provided by us or another entity within the Nead, LLC Network.</p>

                <p>This Website and its contents are protected by copyright, trademark, and other laws of the United States and/or foreign countries. We and our licensors reserve all rights not expressly granted in these Terms of Use.</p>

                <p>“DEV”, “DEV.co”, “NEAD”, “Nead, LLC”, the Nead, LLC/DEV.co logo, and local language variants of the foregoing trademarks, and certain product names that appear on this Website (collectively, the “Nead, LLC Marks”), are trademarks or registered trademarks of entities within the Nead, LLC Network. Except as expressly provided in these Terms of Use or as expressly authorized in writing by the relevant trademark owner, you shall not use any Nead, LLC Marks either alone or in combination with other words or design elements, including, in any press release, advertisement, or other promotional or marketing material or media, whether in written, oral, electronic, visual or any other form.</p>
                <p>References to other parties’ trademarks on this Website are for identification purposes only and do not indicate that such parties have approved this Website or any of its contents. These Terms of Use do not grant you any right to use the trademarks of other parties.</p>
            </div>
            <div className='terms_block'>
              <h2>Disclaimers and Limitations of Liability</h2>
                <p>THIS WEBSITE (INCLUDING WITHOUT LIMITATION ANY CONTENT OR OTHER PART THEREOF) CONTAINS GENERAL INFORMATION ONLY, AND WE ARE NOT, BY MEANS OF THIS WEBSITE, RENDERING PROFESSIONAL ADVICE OR SERVICES. BEFORE MAKING ANY DECISION OR TAKING ANY ACTION THAT MIGHT AFFECT YOUR FINANCES OR BUSINESS, YOU SHOULD CONSULT A QUALIFIED PROFESSIONAL ADVISOR.</p>

                <p>THIS WEBSITE IS PROVIDED AS IS, AND WE MAKE NO EXPRESS OR IMPLIED REPRESENTATIONS OR WARRANTIES REGARDING IT. WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT THAT THIS WEBSITE WILL BE SECURE, ERROR-FREE, FREE FROM VIRUSES OR MALICIOUS CODE, OR WILL MEET ANY PARTICULAR CRITERIA OF PERFORMANCE OR QUALITY. WE EXPRESSLY DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, COMPATIBILITY, SECURITY, AND ACCURACY.</p>

                <p>
                YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK AND YOU ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR USAGE, INCLUDING, WITHOUT LIMITATION, WITH RESPECT TO LOSS OF SERVICE OR DATA. WE WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OR ANY OTHER DAMAGES WHATSOEVER, WHETHER IN AN ACTION OF CONTRACT, STATUTE, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE), OR OTHERWISE, RELATING TO OR ARISING OUT OF THE USE OF THIS WEBSITE, EVEN IF WE KNEW, OR SHOULD HAVE KNOWN, OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                <p>CERTAIN LINKS ON THIS WEBSITE MAY LEAD TO WEBSITES, RESOURCES OR TOOLS MAINTAINED BY THIRD PARTIES OVER WHOM WE HAVE NO CONTROL, INCLUDING, WITHOUT LIMITATION, THOSE MAINTAINED BY OTHER ENTITIES WITHIN THE NEAD, LLC NETWORK OR INDIVIDUAL PERSONNEL OF SUCH ENTITIES. WITHOUT LIMITING ANY OF THE FOREGOING, WE MAKE NO EXPRESS OR IMPLIED REPRESENTATIONS OR WARRANTIES WHATSOEVER REGARDING SUCH WEBSITES, RESOURCES AND TOOLS, AND LINKS TO ANY SUCH WEBSITES, RESOURCES AND TOOLS SHOULD NOT BE CONSTRUED AS AN ENDORSEMENT OF THEM OR THEIR CONTENT BY US.</p>
                <p>THE ABOVE DISCLAIMERS AND LIMITATIONS OF LIABILITY SHALL BE APPLICABLE NOT ONLY TO US BUT ALSO TO EACH OTHER ENTITY WITHIN THE NEAD, LLCNETWORK AND TO OUR AND THEIR RESPECTIVE PERSONNEL. THE ABOVE DISCLAIMERS AND LIMITATIONS OF LIABILITY ARE APPLICABLE TO THE FULLEST EXTENT PERMITTED BY LAW, WHETHER IN CONTRACT, STATUTE, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE) OR OTHERWISE.</p>
            </div>
            <div className='terms_block'>
              <h2>Additional Terms</h2>
                <p>If any portion of these Terms of Use is invalid or unenforceable in any jurisdiction, then (i) in that jurisdiction it shall be re-construed to the maximum effect permitted by law in order to effect its intent as nearly as possible, and the remainder of these Terms of Use shall remain in full force and effect, and (ii) in every other jurisdiction, all of these Terms of Use shall remain in full force and effect.</p>

                <p>We may revise these Terms of Use at any time in our sole discretion by posting such revised Terms of Use at the Terms of Use link (i.e., this webpage that you are currently viewing) or elsewhere in this Website. Such revisions shall be effective as to you upon posting, unless explicitly stated by us. It is your responsibility to be aware of any such revised Terms of Use by checking this webpage. Your continued use of this Website following changes to these Terms of Use constitutes your agreement to the revised Terms of Use.</p>
            </div>

            <div className='get_quote_block'>
              <div className='get_quote_box'  style={{
          backgroundImage: "url('/images/gradbg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the background image scales properly
        }}>
                <Image
                  src="/images/logoi_white_newht.png"
                  alt="Logo"
                  width={200} // Specify appropriate width
                  height={100} // Specify appropriate height
                  priority // Ensures the image is loaded immediately
                />
                <h3>Submit a project and get a quote</h3>
                <a href="/contact" class="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">Tell Us About Your Next Project</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TermsDatablock;
