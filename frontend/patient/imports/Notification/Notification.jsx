import svgPaths from "./svg-dsdme2590k";
import imgUserProfile from "./be7fa8935df588b3616b1419f3c3df6b50649866.png";
import imgModernClinicInterior from "./70b7db519633f2d1da9ac6a6acc2f2541203ffc3.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[normal]">SEARCH CLINICAL RECORDS...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[9px] pl-[48px] pr-[16px] pt-[8px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-[12.5%] content-stretch flex flex-col items-start left-[16px] top-[12.5%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Input />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container4 />
      <div className="absolute bg-[#e11d48] right-[-0.01px] rounded-[9999px] size-[8px] top-0" data-name="Background" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-right w-[74.84px]">
        <p className="leading-[16px]">Alex Sterling</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-right tracking-[-0.5px] uppercase w-[95.22px]">
        <p className="leading-[15px]">PATIENT ID: 4882-AZ</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[95.22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="User Profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[25px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none" />
      <Container5 />
      <UserProfile />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.99px] items-center relative size-full">
        <Button />
        <VerticalBorder />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.6)] relative rounded-[24px] shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[41px] py-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(226,232,240,0.5),0px_4px_6px_-4px_rgba(226,232,240,0.5)]" data-name="Header:shadow" />
          <Container />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function HeaderMargin() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] pt-[16px] w-full" data-name="Header:margin">
      <Header />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pe049700} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Background">
      <Container9 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[transparent] tracking-[-0.4px] w-[157.17px]" style={{ backgroundImage: "linear-gradient(168.492deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }}>
        <p className="leading-[32px]">Azure Clinical</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[98.11px]">
        <p className="leading-[15px]">PATIENT PORTAL</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[157.17px]" data-name="Container">
      <Heading />
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] tracking-[-0.4px] w-[79.84px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p3c95900} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] tracking-[-0.4px] w-[102.25px]">
        <p className="leading-[24px]">Appointments</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p1ab75280} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] tracking-[-0.4px] w-[111.41px]">
        <p className="leading-[24px]">Health Records</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #006591)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[16px] tracking-[-0.4px] w-[77.06px]">
          <p className="leading-[24px]">Messages</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#006591] border-r-3 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16px] pr-[19px] py-[16px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function NavMargin() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[16px] relative size-full">
          <Nav />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-[42.03px] pr-[42.05px] py-[16px] relative rounded-[16px] shrink-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.2),0px_4px_6px_-4px_rgba(2,132,199,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.4px] w-[138.92px]">
        <p className="leading-[24px]">Book Appointment</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] tracking-[-0.4px] w-[59.56px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] tracking-[-0.4px] w-[58.52px]">
        <p className="leading-[24px]">Support</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Button1 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(241,245,249,0.5)] content-stretch flex flex-col gap-[24px] h-[1124px] items-start left-0 pl-[32px] pr-[33px] py-[32px] rounded-br-[32px] rounded-tr-[32px] top-0 w-[288px] hidden" data-name="Aside">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-r border-solid inset-0 pointer-events-none rounded-br-[32px] rounded-tr-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1124px] left-0 shadow-[0px_25px_50px_-12px_rgba(12,74,110,0.05)] top-0 w-[288px] hidden" data-name="Aside:shadow" />
      <Container8 />
      <NavMargin />
      <Container20 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[10px] tracking-[2px] uppercase w-[221.13px]">
        <p className="leading-[15px]">CENTRALIZED COMMUNICATIONS</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[45px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[36px] w-[344.2px]">
        <p className="leading-[45px]">Notification Center</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[344.2px]" data-name="Container">
      <Container27 />
      <Heading1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col items-center justify-center px-[25px] py-[11px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-[106.83px]">
        <p className="leading-[20px]">Mark all as read</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[11.5px] pt-[10.5px] px-[24px] relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.2),0px_4px_6px_-4px_rgba(2,132,199,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[78.39px]">
        <p className="leading-[20px]">Filter Alerts</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[25.625px] relative shrink-0 w-[23.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 25.625">
        <g id="Container">
          <path d={svgPaths.p26a73100} fill="var(--fill-0, #006591)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Overlay">
      <Container32 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[10px] tracking-[1px] uppercase w-[86.72px]">
        <p className="leading-[15px]">HEALTH ALERT</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Overlay1 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[79.91px]">
          <p className="leading-[15px]">2 HOURS AGO</p>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[1.2px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-full">
        <p className="leading-[28px]">Annual Flu Vaccination Due</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Your records indicate you are due for your seasonal influenza</p>
        <p className="leading-[22.75px] mb-0">vaccine. Early immunization is recommended for the upcoming</p>
        <p className="leading-[22.75px]">winter season.</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[14px] text-center w-[98.42px]">
        <p className="leading-[20px]">Schedule Now</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[54px]">
        <p className="leading-[20px]">Dismiss</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[9.2px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.8px] items-start min-w-px relative self-stretch" data-name="Container">
      <Container34 />
      <Heading2 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Overlay />
        <Container33 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[83.25px] right-px top-px w-[79.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.5 83.25">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p58f4e00} fill="var(--fill-0, #1A1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[36px] pr-[33px] py-[33px] relative size-full">
          <Container31 />
          <Container37 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0ea5e9] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p2d32e580} fill="var(--fill-0, #059669)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Overlay">
      <Container39 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[10px] tracking-[1px] uppercase w-[103.83px]">
        <p className="leading-[15px]">CLINICAL UPDATE</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay3 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[68.97px]">
        <p className="leading-[15px]">YESTERDAY</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[1.2px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-full">
        <p className="leading-[28px]">Lab Results: Complete Blood Count</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9.2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Your recent lab work from Oct 24th has been processed. Dr. Aris</p>
        <p className="leading-[22.75px] mb-0">{`has reviewed the results and marked them as 'Within Normal`}</p>
        <p className="leading-[22.75px]">{`Range'.`}</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(2,132,199,0.1),0px_4px_6px_-4px_rgba(2,132,199,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[82.45px]">
        <p className="leading-[20px]">View Report</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.8px] items-start min-w-px relative self-stretch" data-name="Container">
      <Container41 />
      <Heading3 />
      <Container42 />
      <Button6 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Overlay2 />
        <Container40 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[36px] pr-[33px] py-[33px] relative size-full">
          <Container38 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#10b981] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[25px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 25">
        <g id="Container">
          <path d={svgPaths.p1a332780} fill="var(--fill-0, #D97706)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Overlay">
      <Container44 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#d97706] text-[10px] tracking-[1px] uppercase w-[60.27px]">
        <p className="leading-[15px]">REMINDER</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay5 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[42.75px]">
        <p className="leading-[15px]">OCT 22</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[1.1px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-full">
        <p className="leading-[28px]">Appointment Confirmation Needed</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Confirm your upcoming Dermatology consultation scheduled for</p>
        <p className="leading-[22.75px]">Thursday, October 31st at 10:30 AM.</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[24px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[54.91px]">
        <p className="leading-[20px]">Confirm</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-[79.19px]">
        <p className="leading-[20px]">Reschedule</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pt-[9.1px] relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.9px] items-start min-w-px relative self-stretch" data-name="Container">
      <Container46 />
      <Heading4 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Overlay4 />
        <Container45 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[#f59e0b] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col items-start pl-[36px] pr-[33px] py-[33px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[35.25px] relative row-1 self-start shrink-0" data-name="Container">
      <OverlayBorderShadowOverlayBlur />
      <OverlayBorderShadowOverlayBlur1 />
      <OverlayBorderShadowOverlayBlur2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[12px] tracking-[2.4px] uppercase w-full">
          <p className="leading-[16px]">UPCOMING SCHEDULE</p>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase w-[21.78px]">
        <p className="leading-[15px]">OCT</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] text-center w-[21.55px]">
        <p className="leading-[28px]">31</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[21.78px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] w-[123.72px]">
        <p className="leading-[20px]">General Check-up</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[155.72px]">
        <p className="leading-[15px]">Dr. Sarah Thompson • 09:00 AM</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[155.72px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container55 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase w-[22.41px]">
        <p className="leading-[15px]">NOV</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] text-center w-[21.23px]">
        <p className="leading-[28px]">12</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[22.41px]" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] w-[146.41px]">
        <p className="leading-[20px]">Cardiology Follow-up</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[162.77px]">
        <p className="leading-[15px]">Main Wing, Room 402 • 02:30 PM</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[162.77px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[43px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container62 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[8px] relative size-full">
        <Container51 />
        <Container58 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[48px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,101,145,0.2)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-px py-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006591] text-[12px] text-center tracking-[1.2px] uppercase w-[154.48px]">
          <p className="leading-[16px]">VIEW FULL CALENDAR</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Heading5 />
        <Container50 />
        <Button9 />
      </div>
    </div>
  );
}

function ModernClinicInterior() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Modern clinic interior">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[110.42%] left-0 max-w-none top-[-5.21%] w-full" src={imgModernClinicInterior} />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col font-bold gap-[3.75px] items-start leading-[0] left-0 pl-[24px] pr-[37.61px] py-[24px] text-white" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] h-[15px] justify-center not-italic relative shrink-0 text-[10px] tracking-[1px] uppercase w-[77.63px]">
        <p className="leading-[15px]">CLINIC NEWS</p>
      </div>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[45px] justify-center relative shrink-0 text-[18px] w-[221.06px]">
        <p className="leading-[22.5px] mb-0">Extended Hours for</p>
        <p className="leading-[22.5px]">Telehealth Consultations</p>
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative rounded-[48px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Overlay+Shadow">
      <ModernClinicInterior />
      <div className="absolute bg-gradient-to-t from-[#006591] inset-0 opacity-60 to-[rgba(0,101,145,0)]" data-name="Gradient" />
      <Paragraph />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p2bdb86e0} fill="var(--fill-0, #006591)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[10px] uppercase w-[44.89px]">
        <p className="leading-[15px]">VERIFIED</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container66 />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9.2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">SECURITY TIP</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">{`Always verify the clinic's digital`}</p>
        <p className="leading-[22.75px] mb-0">signature when receiving</p>
        <p className="leading-[22.75px]">vaccination alerts through email.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,101,145,0.05)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[6.8px] items-start p-[32px] relative size-full">
        <Container65 />
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayShadow />
      <OverlayOverlayBlur />
    </div>
  );
}

function Container29() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[auto] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container49 />
    </div>
  );
}

function MainSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[32px] pt-[24px] pb-[40px] w-full" data-name="Main → Section">
      <Container25 />
      <Container29 />
    </div>
  );
}

export default function Notification() {
  return (
    <div className="relative w-full min-h-screen" style={{ backgroundImage: "linear-gradient(90deg, rgb(241, 245, 249) 0%, rgb(241, 245, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="notification">
      <Aside />
      <MainSection />
    </div>
  );
}
