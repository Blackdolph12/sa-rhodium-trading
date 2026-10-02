"use client"
import { useState } from 'react'
export default function Page(){
const [amount,setAmount]=useState(100000)
const pricePerGram=4850
const grams=(amount/pricePerGram).toFixed(2)
return (
<div style={{minHeight:'100vh',background:'radial-gradient(1200px 600px at 80% -10%, #1a1a2e 0%, #07070a 60%)',color:'#fff',fontFamily:'system-ui',padding:'20px'}}>
<div style={{maxWidth:1100,margin:'0 auto'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 0',borderBottom:'1px solid #1f1f25'}}>
<div style={{fontWeight:900,letterSpacing:2}}>SA RHODIUM TRADING</div>
<div style={{background:'#d4af37',color:'#000',padding:'8px 16px',borderRadius:20,fontWeight:700,fontSize:12}}>PRIVATE VAULT • SA</div>
</div>

<div style={{display:'grid',gridTemplateColumns:'1.2fr 0.8fr',gap:30,marginTop:50}}>
<div>
<h1 style={{fontSize:54,lineHeight:1,margin:0}}>Private<br/><span style={{color:'#d4af37'}}>Rhodium Vault</span><br/>South Africa</h1>
<p style={{color:'#9aa',marginTop:20,maxWidth:500}}>Institutional-grade rhodium custody. Allocated. Insured. Audited. Direct mine allocation, Durban & Johannesburg vaults.</p>
<div style={{display:'flex',gap:20,marginTop:30}}>
<div><div style={{color:'#d4af37',fontSize:28,fontWeight:800}}>R {pricePerGram}</div><div style={{color:'#666',fontSize:12}}>/ GRAM LIVE</div></div>
<div><div style={{fontSize:28,fontWeight:800}}>100%</div><div style={{color:'#666',fontSize:12}}>INSURED & ALLOCATED</div></div>
</div>
<div style={{marginTop:40,background:'#111116',border:'1px solid #222',borderRadius:16,padding:20}}>
<div style={{display:'flex',justifyContent:'space-between'}}><span>Investment Amount</span><span style={{color:'#d4af37',fontWeight:800}}>R {amount.toLocaleString()}</span></div>
<input type="range" min="50000" max="5000000" step="50000" value={amount} onChange={e=>setAmount(e.target.value)} style={{width:'100%',marginTop:15}}/>
<div style={{display:'flex',justifyContent:'space-between',marginTop:15,color:'#9aa'}}><span>~ {grams}g Rhodium</span><span>Storage: 0.8% p/a</span></div>
<a href="https://wa.me/27700000000" style={{display:'block',textAlign:'center',marginTop:20,background:'#d4af37',color:'#000',padding:16,borderRadius:12,fontWeight:900,textDecoration:'none'}}>SECURE ALLOCATION VIA WHATSAPP</a>
</div>
</div>

<div style={{background:'linear-gradient(180deg,#15151d,#0c0c10)',border:'1px solid #222',borderRadius:20,padding:24}}>
<div style={{fontSize:12,letterSpacing:3,color:'#666'}}>VAULT CERTIFICATE PREVIEW</div>
<div style={{marginTop:20,background:'#07070a',borderRadius:12,padding:20,border:'1px dashed #333'}}>
<div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#666'}}>Client ID</span><span>SA-RH-2026-8847</span></div>
<div style={{display:'flex',justifyContent:'space-between',marginTop:10}}><span style={{color:'#666'}}>Metal</span><span>Rh 99.9% Powder</span></div>
<div style={{display:'flex',justifyContent:'space-between',marginTop:10}}><span style={{color:'#666'}}>Vault</span><span>Durban Private</span></div>
<div style={{display:'flex',justifyContent:'space-between',marginTop:10}}><span style={{color:'#666'}}>Status</span><span style={{color:'#0f0'}}>● ALLOCATED</span></div>
</div>
<div style={{marginTop:20}}>
<div style={{color:'#d4af37',fontWeight:700}}>Why SA Rhodium?</div>
<ul style={{color:'#aaa',lineHeight:1.8,fontSize:14}}>
<li>Direct from SA PGM mines - no middlemen</li>
<li>Lloyd's of London insured</li>
<li>Quarterly audit + photo proof</li>
<li>Sell back anytime - 48hr liquidity</li>
</ul>
</div>
</div>
</div>

<div style={{textAlign:'center',color:'#444',marginTop:60,fontSize:12}}>© 2026 SA RHODIUM TRADING (PTY) LTD • FSP COMPLIANT • PRIVATE CLIENTS ONLY</div>
</div>
</div>
)
}