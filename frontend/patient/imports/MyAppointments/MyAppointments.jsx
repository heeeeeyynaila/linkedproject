import svgPaths from "./svg-3wip7essrr";
import imgDoctor from "./6ae00772c646b4e18cdab63e088c6444e216fa93.png";
import imgDoctor1 from "./0a753ca16ebe0ccc3c9ff92053794cca6dc20bec.png";
import imgClinicMap from "./120c3f86bbff20749947465f18cbb5ff6b0369c1.png";
import imgProfile from "./bf97d6822d3fecac24ece4f49d2201ab618a115e.png";
import imgUserAvatar from "./7e3b06d4b655a84a9978a511dc92d400739e2140.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Arcio Patient</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Clinical Portal</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[24px] relative size-full">
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[18px] mr-[-0.632px] relative shrink-0 w-[30.632px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6316 18">
        <g id="Margin">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[82.526px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Margin1 />
      <Container3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[16px] mr-[-0.632px] relative shrink-0 w-[28.632px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6316 16">
        <g id="Margin">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[76.589px]">
        <p className="leading-[24px]">My Profile</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Margin2 />
      <Container4 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[20px] mr-[-0.632px] relative shrink-0 w-[30.632px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6316 20">
        <g id="Margin">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[108.958px]">
        <p className="leading-[24px]">Appointments</p>
      </div>
    </div>
  );
}

function LinkActiveTabAppointments() {
  return (
    <div className="content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative rounded-[12px] w-[223px]" style={{ backgroundImage: "linear-gradient(167.853deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Link - ACTIVE TAB: Appointments">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_11.15px_2.4px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(6,182,212,0.2),0px_4px_6px_-4px_rgba(6,182,212,0.2)]" data-name="Link - ACTIVE TAB: Appointments:shadow" />
      <Margin3 />
      <Container5 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[20px] mr-[-0.632px] relative shrink-0 w-[28.632px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6316 20">
        <g id="Margin">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[86.063px]">
        <p className="leading-[24px]">Documents</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Margin4 />
      <Container6 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[20.5px] mr-[-0.632px] relative shrink-0 w-[31.632px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.6316 20.5">
        <g id="Margin">
          <path d={svgPaths.p1f1be480} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[96.411px]">
        <p className="leading-[24px]">Vaccinations</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Margin5 />
      <Container7 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[16px] mr-[-0.632px] relative shrink-0 w-[32.632px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6316 16">
        <g id="Margin">
          <path d={svgPaths.p2a8bfa60} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[90.642px]">
        <p className="leading-[24px]">Medical File</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Margin6 />
      <Container8 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[16px] mr-[-0.632px] relative shrink-0 w-[32.632px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6316 16">
        <g id="Margin">
          <path d={svgPaths.p12092b00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[123.253px]">
        <p className="leading-[24px]">Announcements</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Margin7 />
      <Container9 />
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.4px] items-start pb-[412.2px] pl-[5.58px] pr-[5.57px] pt-[1.2px] relative size-full">
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link />
          </div>
        </div>
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link1 />
          </div>
        </div>
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <LinkActiveTabAppointments />
          </div>
        </div>
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link2 />
          </div>
        </div>
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link3 />
          </div>
        </div>
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link4 />
          </div>
        </div>
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[20px] mr-[-0.632px] relative shrink-0 w-[32.732px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7316 20">
        <g id="Margin">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.632px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[61.653px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[12px] w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] pr-[16.632px] py-[12px] relative size-full">
        <Margin8 />
        <Container10 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.2px] pl-[5.58px] pr-[5.57px] pt-[18.2px] relative size-full">
        <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" }}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function AsideSideNavBarJsonDerived() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(241,245,249,0.7)] content-stretch flex flex-col gap-[8px] h-[1024px] items-start pl-[16px] pr-[17px] py-[16px] relative shrink-0 w-[256px] hidden" data-name="Aside - SideNavBar (JSON Derived)">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1024px] left-0 shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)] top-0 w-[256px] hidden" data-name="Aside - SideNavBar (JSON Derived):shadow" />
      <Margin />
      <Nav />
      <HorizontalBorder />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[48px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-3xl tracking-[-1.2px] w-[324.63px]">
        <p className="leading-[48px]">Your Schedule</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[16px] w-[491.5px]">
        <p className="leading-[26px] mb-0">Manage your clinical consultations, track queue positions in real-</p>
        <p className="leading-[26px]">time, and coordinate with your healthcare providers.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[491.5px]" data-name="Container">
      <Heading1 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0ea5e9] content-stretch flex gap-[11.99px] items-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.03px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(6,182,212,0.3),0px_4px_6px_-4px_rgba(6,182,212,0.3)]" data-name="Button:shadow" />
      <Container13 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[180.86px]">
        <p className="leading-[24px]">Book New Appointment</p>
      </div>
    </div>
  );
}

function HeroSectionActionBar() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Hero Section / Action Bar">
      <Container11 />
      <Button />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p9135100} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 3">
      <Container15 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] w-[156.67px]">
        <p className="leading-[28px]">Upcoming Visits</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[14px] text-center w-[86.34px]">
        <p className="leading-[20px]">View History</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Heading2 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Doctor() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Doctor">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDoctor} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 size-[80px]" data-name="Overlay+Shadow">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 pointer-events-none rounded-[16px]" />
      <Doctor />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-[148.34px]">
        <p className="leading-[28px]">Dr. Julian Thorne</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[141.3px]">
        <p className="leading-[20px]">Cardiology Specialist</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148.34px]" data-name="Container">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#c8e6ff] content-stretch flex flex-col items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e2f] text-[12px] tracking-[0.6px] uppercase w-[78.48px]">
        <p className="leading-[16px]">Scheduled</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Background />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">{`Date & Time`}</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
        <p className="leading-[20px]">Oct 24, 09:30 AM</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-px relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Queue No.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[14px] w-[27.22px]">
        <p className="leading-[20px]">#08</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] w-[61.42px]">
        <p className="leading-[15px]">Current: #04</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container24() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-px relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[47.03px]">
        <p className="leading-[20px]">Cancel</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #334155)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#dfe3e7] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container30 />
    </div>
  );
}

function Container29() {
  return (
    <div className="col-3 h-[40px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_40px] pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container21 />
      <Container24 />
      <Container29 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <Container18 />
      <HorizontalBorder1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <OverlayShadow />
        <Container17 />
      </div>
    </div>
  );
}

function AppointmentCard1ScheduledPrimary() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.4)] relative rounded-[24px] shrink-0 w-full" data-name="Appointment Card 1: Scheduled & Primary">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Appointment Card 1: Scheduled & Primary:shadow" />
        <Container16 />
      </div>
    </div>
  );
}

function Doctor1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Doctor">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDoctor1} />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[80px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#f0f4f8] inset-0 pointer-events-none rounded-[16px]" />
      <Doctor1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-[150.56px]">
        <p className="leading-[28px]">Dr. Sarah Al-Farsi</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[136.72px]">
        <p className="leading-[20px]">Pediatric Nutritionist</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.56px]" data-name="Container">
      <Heading4 />
      <Container35 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eaeef2] content-stretch flex flex-col items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] tracking-[0.6px] uppercase w-[58.41px]">
        <p className="leading-[16px]">Pending</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Background1 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">{`Date & Time`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
        <p className="leading-[20px]">Oct 26, 02:15 PM</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-px relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Queue No.</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px]">TBD</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-px relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[47.03px]">
        <p className="leading-[20px]">Cancel</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #334155)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#dfe3e7] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container43 />
    </div>
  );
}

function Container42() {
  return (
    <div className="col-3 h-[40px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_40px] pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container36 />
      <Container39 />
      <Container42 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <Container33 />
      <HorizontalBorder2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <BackgroundShadow />
        <Container32 />
      </div>
    </div>
  );
}

function AppointmentCard2Pending() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.4)] relative rounded-[24px] shrink-0 w-full" data-name="Appointment Card 2: Pending">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Appointment Card 2: Pending:shadow" />
        <Container31 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[30px] relative shrink-0 w-[27px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 30">
        <g id="Container">
          <path d={svgPaths.p37fa5680} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <Container44 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] text-center w-[127.77px]">
          <p className="leading-[24px]">Planning ahead?</p>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[320px] px-[9.7px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[300.6px]">
        <p className="leading-[20px] mb-0">Book recurring check-ups for Maya to ensure</p>
        <p className="leading-[20px]">consistent clinical follow-up.</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="max-w-[320px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[4px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function EmptyStateIllustrationOrPlaceholderForMore() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Empty State Illustration or Placeholder for More">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[42px] relative size-full">
          <Margin9 />
          <Heading5 />
          <Margin10 />
        </div>
      </div>
    </div>
  );
}

function MainAppointmentListLargeCard() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Main Appointment List (Large Card)">
      <Container14 />
      <AppointmentCard1ScheduledPrimary />
      <AppointmentCard2Pending />
      <EmptyStateIllustrationOrPlaceholderForMore />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container46 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[18px] w-[130.2px]">
          <p className="leading-[28px]">Clinic Location</p>
        </div>
      </div>
    </div>
  );
}

function ClinicMap() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-80 relative w-full" data-name="Clinic Map">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[148.75%] left-0 max-w-none top-[-24.38%] w-full" src={imgClinicMap} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex flex-col inset-0 items-start justify-center" data-name="Background">
      <ClinicMap />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2cccbbb0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#006590] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
      <Container49 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Background4 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[160px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Background3 />
        <Container48 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">Arcio Medical Center West</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[19.5px] mb-0">1200 Healthcare Plaza, Ste 400</p>
        <p className="leading-[19.5px]">North Pavilion, Floor 4</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function MiniMapCard() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.4)] relative rounded-[24px] shrink-0 w-full" data-name="Mini Map Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Mini Map Card:shadow" />
        <Heading6 />
        <Container47 />
        <Container50 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[15.075px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.075">
        <g id="Container">
          <path d={svgPaths.p348f1c40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container53 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white w-[117.55px]">
        <p className="leading-[28px]">Pre-visit Task</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Margin">
          <path d={svgPaths.p38557990} fill="var(--fill-0, #A5F3FC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[145.14px]">
        <p className="leading-[20px]">Upload ID documents</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(207,250,254,0.7)] w-[111.31px]">
        <p className="leading-[16.5px]">Required for first visit</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[145.14px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin11 />
      <Container54 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Margin">
          <path d={svgPaths.pde310b0} fill="var(--fill-0, #A5F3FC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[162.5px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">Confirm medical history</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(207,250,254,0.7)] w-[91.77px]">
        <p className="leading-[16.5px]">Submitted 2h ago</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[162.5px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start opacity-60 relative shrink-0 w-full" data-name="Item">
      <Margin12 />
      <Container57 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Margin">
          <path d={svgPaths.p38557990} fill="var(--fill-0, #A5F3FC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[141.78px]">
        <p className="leading-[20px]">Fasting Confirmation</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(207,250,254,0.7)] w-[124.53px]">
        <p className="leading-[16.5px]">Blood work requirement</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[141.78px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin13 />
      <Container60 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function PreparationChecklist() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(140.787deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Preparation Checklist">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(6,182,212,0.2),0px_8px_10px_-6px_rgba(6,182,212,0.2)]" data-name="Preparation Checklist:shadow" />
        <Heading7 />
        <List />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="Container">
      <div className="absolute bg-[#4ade80] inset-0 opacity-75 rounded-[9999px]" data-name="Background" />
      <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-[135.77px]">
        <p className="leading-[20px]">Telehealth Available</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container64 />
        <Heading8 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
          <p className="leading-[19.5px] mb-0">{`Can't make it in person? Switch any`}</p>
          <p className="leading-[19.5px] mb-0">eligible appointment to a virtual</p>
          <p className="leading-[19.5px]">consultation.</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center w-[66.13px]">
          <p className="leading-[16px]">Learn More</p>
        </div>
      </div>
    </div>
  );
}

function TelehealthBanner() {
  return (
    <div className="bg-[#e4e9ed] relative rounded-[24px] shrink-0 w-full" data-name="Telehealth Banner">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[25px] relative size-full">
        <Container63 />
        <Container65 />
        <Button6 />
      </div>
    </div>
  );
}

function SidebarInfoRightRail() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Sidebar Info / Right Rail">
      <MiniMapCard />
      <PreparationChecklist />
      <TelehealthBanner />
    </div>
  );
}

function BentoGridLayoutForAppointments() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[auto] relative shrink-0 w-full" data-name="Bento Grid Layout for Appointments">
      <MainAppointmentListLargeCard />
      <SidebarInfoRightRail />
    </div>
  );
}

function ScrollableContent() {
  return (
    <div className="relative content-stretch flex flex-col gap-[32px] items-start p-[16px]" data-name="Scrollable Content">
      <HeroSectionActionBar />
      <BentoGridLayoutForAppointments />
    </div>
  );
}

function Profile() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile} />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[76.2px]">
        <p className="leading-[20px]">Maya Arcio</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[4.317px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.31667">
        <g id="Container">
          <path d={svgPaths.p1a9c9340} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonChildSwitcherPrimaryAction() {
  return (
    <div className="bg-[#e4e9ed] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button - Child Switcher / Primary Action">
      <Profile />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7281a80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User Avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserAvatar} />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <UserAvatar />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container70 />
      <Container71 />
      <OverlayBorderShadow />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <ButtonChildSwitcherPrimaryAction />
      <Container69 />
    </div>
  );
}

function HeaderTopAppBarJsonDerived() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(241,245,249,0.7)] content-stretch flex items-center justify-between left-0 px-[32px] py-[16px] right-0 top-0 hidden" data-name="Header - TopAppBar (JSON Derived)">
      <Container66 />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="flex-1 min-w-px relative self-stretch" data-name="Main Content Area">
      <ScrollableContent />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full min-h-screen" data-name="Container">
      <MainContentArea />
    </div>
  );
}

export default function MyAppointments() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start relative w-full" data-name="My Appointments">
      <Container />
    </div>
  );
}

