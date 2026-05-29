import svgPaths from "./svg-arrv1yruee";
import imgAb6AXuCbHjczqw9Rsclz0AfIcOo5SvX6AmZwwobVdzEieEoRa8IHiuU3DUiU0ZDmnQnaYo3MVsTydGXhplE1DcLw4Of0016LRVoVKs0YYFi8QmAtnWpsQuiFxXtIlszcmDdT3L4XPkbjJkyTa1TtXy1DU67546PhDovSzSS3XApPh44XymLrbdY5NYhIntVRx1Rt2AsiaENafDAcC2B43OVkK8O4GgrpyoyqInkbi0DNjjil7EikPgOpUl2Oy7DziA1UqWdr1FxuAmlp from "./1c8b2f0f62294393be9ae800429559c64c6ebcec.png";
import imgAb6AXuDhlFPnYp4CM8D0RI0GmGbmJwAoMr0KZo1SEb7KRvTha62YinpHrXsir58Wo3YdnnlCW2YuL1LjAuaN02BUCynCmc3VKl2K1F426DKbOfJyCedPsHZttl0W8DRtk2HOtYnHuvyPc2LbBwDp51UNHf9HPvA5AcxvlcLHdWq5XzqUcNbtxIsUaJc8VyEuCt6XbC3RGqIwJCrqLjDGnArRldCSrTibUiSLpXnpaILnkPlzMa4BlKZti1RvWnVUkCkIn7BI6Gh from "./503cb4ac3b37b9195c62a85471d21307e2195dd5.png";

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
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[8px] px-[8px] relative size-full">
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[83.453px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkDashboard() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link - Dashboard">
      <Container3 />
      <Container4 />
    </div>
  );
}

function LinkDashboardCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link - Dashboard:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkDashboard />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[77.558px]">
        <p className="leading-[24px]">My Profile</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link">
      <Container5 />
      <Container6 />
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[107.042px]">
        <p className="leading-[24px]">Appointments</p>
      </div>
    </div>
  );
}

function LinkAppointments() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link - Appointments">
      <Container7 />
      <Container8 />
    </div>
  );
}

function LinkAppointmentsCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link - Appointments:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkAppointments />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[87.232px]">
        <p className="leading-[24px]">Documents</p>
      </div>
    </div>
  );
}

function LinkDocuments() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link - Documents">
      <Container9 />
      <Container10 />
    </div>
  );
}

function LinkDocumentsCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link - Documents:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkDocuments />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.5">
        <g id="Container">
          <path d={svgPaths.p1f1be480} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[98.168px]">
        <p className="leading-[24px]">Vaccinations</p>
      </div>
    </div>
  );
}

function LinkVaccinations() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link - Vaccinations">
      <Container11 />
      <Container12 />
    </div>
  );
}

function LinkVaccinationsCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link - Vaccinations:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkVaccinations />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p202d95e8} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[92.516px]">
        <p className="leading-[24px]">Medical File</p>
      </div>
    </div>
  );
}

function LinkMedicalFileActive() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" style={{ backgroundImage: "linear-gradient(167.853deg, rgb(0, 101, 145) 0%, rgb(14, 165, 233) 100%)" }} data-name="Link - Medical File (ACTIVE)">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_11.15px_2.4px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(6,182,212,0.2),0px_4px_6px_-4px_rgba(6,182,212,0.2)]" data-name="Link - Medical File (ACTIVE):shadow" />
      <Container13 />
      <Container14 />
    </div>
  );
}

function LinkMedicalFileActiveCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link - Medical File (ACTIVE):css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkMedicalFileActive />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p12092b00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[125.295px]">
        <p className="leading-[24px]">Announcements</p>
      </div>
    </div>
  );
}

function LinkAnnouncements() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link - Announcements">
      <Container15 />
      <Container16 />
    </div>
  );
}

function LinkAnnouncementsCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.58px] pr-[5.57px] relative shrink-0 w-[223px]" data-name="Link - Announcements:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkAnnouncements />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[62.768px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function LinkSettings() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] w-[223px]" data-name="Link - Settings">
      <Container17 />
      <Container18 />
    </div>
  );
}

function LinkSettingsCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end pl-[5.58px] pr-[5.57px] pt-[881px] relative shrink-0 w-[223px]" data-name="Link - Settings:css-transform">
      <div className="flex h-[45.6px] items-center justify-center relative shrink-0 w-[211.85px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "43" }}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkSettings />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.4px] items-start py-[1.2px] relative size-full">
        <LinkDashboardCssTransform />
        <LinkCssTransform />
        <LinkAppointmentsCssTransform />
        <LinkDocumentsCssTransform />
        <LinkVaccinationsCssTransform />
        <LinkMedicalFileActiveCssTransform />
        <LinkAnnouncementsCssTransform />
        <LinkSettingsCssTransform />
      </div>
    </div>
  );
}

function Ab6AXuCbHjczqw9Rsclz0AfIcOo5SvX6AmZwwobVdzEieEoRa8IHiuU3DUiU0ZDmnQnaYo3MVsTydGXhplE1DcLw4Of0016LRVoVKs0YYFi8QmAtnWpsQuiFxXtIlszcmDdT3L4XPkbjJkyTa1TtXy1DU67546PhDovSzSS3XApPh44XymLrbdY5NYhIntVRx1Rt2AsiaENafDAcC2B43OVkK8O4GgrpyoyqInkbi0DNjjil7EikPgOpUl2Oy7DziA1UqWdr1FxuAmlp() {
  return (
    <div className="max-w-[223px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="AB6AXuCbHjczqw9RSCLZ0AfICOo5svX6_AMZwwobVdzEIEEoRa8iHiuU3dUiU0ZDmnQNAYo3mVSTydGXhplE1DCLw4OF0016lRVoVKs0yYFi8qmAtnWPSQuiFxXTIlszcmDdT3l4xPkbjJKYTa1TtXy1dU67546PhDOVSzS_s3XApPh44XymLrbd_y5NYhIntVRx1rt2AsiaENafDAcC2B43OVkK8O4ggrpyoyqINKBI0dNjjil7eikPgOPUl2Oy7DziA1uqWDR1fxu_amlp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuCbHjczqw9Rsclz0AfIcOo5SvX6AmZwwobVdzEieEoRa8IHiuU3DUiU0ZDmnQnaYo3MVsTydGXhplE1DcLw4Of0016LRVoVKs0YYFi8QmAtnWpsQuiFxXtIlszcmDdT3L4XPkbjJkyTa1TtXy1DU67546PhDovSzSS3XApPh44XymLrbdY5NYhIntVRx1Rt2AsiaENafDAcC2B43OVkK8O4GgrpyoyqInkbi0DNjjil7EikPgOpUl2Oy7DziA1UqWdr1FxuAmlp} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[95.56px]">
        <p className="leading-[20px]">Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[126.41px]">
        <p className="leading-[16px]">Patient ID: ARC-90210</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[126.41px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Ab6AXuCbHjczqw9Rsclz0AfIcOo5SvX6AmZwwobVdzEieEoRa8IHiuU3DUiU0ZDmnQnaYo3MVsTydGXhplE1DcLw4Of0016LRVoVKs0YYFi8QmAtnWpsQuiFxXtIlszcmDdT3L4XPkbjJkyTa1TtXy1DU67546PhDovSzSS3XApPh44XymLrbdY5NYhIntVRx1Rt2AsiaENafDAcC2B43OVkK8O4GgrpyoyqInkbi0DNjjil7EikPgOpUl2Oy7DziA1UqWdr1FxuAmlp />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Overlay />
      </div>
    </div>
  );
}

function AsideSideNavigationAuthoritySourceJson() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(241,245,249,0.7)] content-stretch flex flex-col gap-[8px] h-[1513px] items-start pl-[16px] pr-[17px] py-[16px] relative shrink-0 w-[256px] hidden" data-name="Aside - Side Navigation (Authority Source: JSON)">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1513px] left-0 shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)] top-0 w-[256px] hidden" data-name="Aside - Side Navigation (Authority Source: JSON):shadow" />
      <Margin />
      <Nav />
      <Margin1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p2a221800} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[136.38px]">
        <p className="leading-[20px]">Dependent Switcher</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eaeef2] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
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

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container25 />
    </div>
  );
}

function Container26() {
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

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container26 />
      <div className="absolute bg-[#ba1a1a] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background" />
    </div>
  );
}

function Ab6AXuDhlFPnYp4CM8D0RI0GmGbmJwAoMr0KZo1SEb7KRvTha62YinpHrXsir58Wo3YdnnlCW2YuL1LjAuaN02BUCynCmc3VKl2K1F426DKbOfJyCedPsHZttl0W8DRtk2HOtYnHuvyPc2LbBwDp51UNHf9HPvA5AcxvlcLHdWq5XzqUcNbtxIsUaJc8VyEuCt6XbC3RGqIwJCrqLjDGnArRldCSrTibUiSLpXnpaILnkPlzMa4BlKZti1RvWnVUkCkIn7BI6Gh() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuDhlFPnYP4cM8d0rI0gmGbmJwAoMr0KZo1-sEB7kRvTha62YINP-HrXsir58-wo3YdnnlC_w2YuL1LJAuaN02bUCynCMC3vKl2K1f426d_kbOFJyCEDPsHZttl0W8DRtk2H-otYn-HUVYPc2lbBwDp51uNHf9hPvA5AcxvlcLHdWq5XzqUcNBTXIsUaJc8vyEuCT6XbC3rGqIwJCrqLjDGnARRldCSrTibUiSLpXnpaILnkPLZMa4blKZti1RV_WnVUk-CkIn7bI6gh">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuDhlFPnYp4CM8D0RI0GmGbmJwAoMr0KZo1SEb7KRvTha62YinpHrXsir58Wo3YdnnlCW2YuL1LjAuaN02BUCynCmc3VKl2K1F426DKbOfJyCedPsHZttl0W8DRtk2HOtYnHuvyPc2LbBwDp51UNHf9HPvA5AcxvlcLHdWq5XzqUcNbtxIsUaJc8VyEuCt6XbC3RGqIwJCrqLjDGnArRldCSrTibUiSLpXnpaILnkPlzMa4BlKZti1RvWnVUkCkIn7BI6Gh} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Ab6AXuDhlFPnYp4CM8D0RI0GmGbmJwAoMr0KZo1SEb7KRvTha62YinpHrXsir58Wo3YdnnlCW2YuL1LjAuaN02BUCynCmc3VKl2K1F426DKbOfJyCedPsHZttl0W8DRtk2HOtYnHuvyPc2LbBwDp51UNHf9HPvA5AcxvlcLHdWq5XzqUcNbtxIsUaJc8VyEuCt6XbC3RGqIwJCrqLjDGnArRldCSrTibUiSLpXnpaILnkPlzMa4BlKZti1RvWnVUkCkIn7BI6Gh />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
      <Background1 />
    </div>
  );
}

function HeaderTopAppBarAuthoritySourceJson() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(241,245,249,0.7)] drop-shadow-[0px_4px_15px_rgba(0,0,0,0.03)] relative shrink-0 w-full z-[2] hidden" data-name="Header - Top App Bar (Authority Source: JSON)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[16px] relative size-full">
          <Background />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-auto justify-center leading-tight relative shrink-0 text-[#171c1f] text-2xl tracking-tight w-full">
        <p>My Medical File</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p15aec574} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-normal not-italic relative shrink-0 text-[#40484e] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Last synchronized: Today at 08:42 AM • Secure Read-only</p>
        <p className="leading-[24px]">Access</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container29 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.pa645fe0} fill="var(--fill-0, #171C1F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#dfe3e7] content-stretch flex gap-[24.95px] items-center pl-[24px] pr-[40.96px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container32 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] text-center w-[50.82px]">
        <p className="leading-[24px] mb-0">Export</p>
        <p className="leading-[24px]">PDF</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[41.55px] items-center pl-[24px] pr-[57.56px] py-[12px] relative rounded-[12px] shrink-0" style={{ backgroundImage: "linear-gradient(161.616deg, rgb(0, 101, 144) 0%, rgb(133, 203, 253) 100%)" }} data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(6,182,212,0.2),0px_4px_6px_-4px_rgba(6,182,212,0.2)]" data-name="Button:shadow" />
      <Container33 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[75.53px]">
        <p className="leading-[24px] mb-0">Authorize</p>
        <p className="leading-[24px]">Provider</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container28 />
      <Container31 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-tight relative shrink-0 text-[#171c1f] text-lg w-full">
        <p>Patient Snapshot</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p812130} fill="var(--fill-0, #001E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#c8e6ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] tracking-[0.6px] uppercase w-[82.14px]">
        <p className="leading-[16px]">Blood Type</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[18px] w-[130.53px]">
        <p className="leading-[28px]">A Positive (A+)</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130.53px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container37 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0f4f8] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[18px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 18">
        <g id="Container">
          <path d={svgPaths.p2018e980} fill="var(--fill-0, #001E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#c8e6ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] tracking-[0.6px] uppercase w-[49px]">
        <p className="leading-[16px]">Height</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[18px] w-[59.42px]">
        <p className="leading-[28px]">172 cm</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59.42px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background5 />
      <Container42 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f0f4f8] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15.994px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9939 18">
        <g id="Container">
          <path d={svgPaths.pc8ea100} fill="var(--fill-0, #001E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#c8e6ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] tracking-[0.6px] uppercase w-[52.3px]">
        <p className="leading-[16px]">Weight</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[18px] w-[63.55px]">
        <p className="leading-[28px]">68.5 kg</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[63.55px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background7 />
      <Container47 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f0f4f8] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Background4 />
      <Background6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] tracking-[1.4px] uppercase w-full">
          <p className="leading-[20px]">Allergies</p>
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#ffdad6] bottom-[32px] content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[9999px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[12px] w-[52.13px]">
        <p className="leading-[16px]">Penicillin</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#ffdad6] bottom-[32px] content-stretch flex flex-col items-start left-[84.13px] px-[12px] py-[4px] rounded-[9999px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[12px] w-[31.47px]">
        <p className="leading-[16px]">Latex</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-[#dfe3e7] bottom-0 content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[9999px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-[84px]">
        <p className="leading-[16px]">Peanuts (Mild)</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Background8 />
        <Background9 />
        <Background10 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[41px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(192,199,207,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Heading3 />
      <Container50 />
    </div>
  );
}

function Section() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)] shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Heading2 />
          <Container34 />
          <HorizontalBorder />
          <div className="absolute bg-[rgba(0,101,144,0.05)] right-[-32px] rounded-bl-[9999px] size-[128px] top-[-32px]" data-name="Overlay" />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[18px] relative shrink-0 w-[17.3px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3 18">
        <g id="Container">
          <path d={svgPaths.p2971ac80} fill="var(--fill-0, #B5DEFF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#b5deff] text-[18px] w-[172.66px]">
        <p className="leading-[28px]">Emergency Contact</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[32px] right-[32px] top-[32px]" data-name="Container">
      <Container52 />
      <Heading4 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[76px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#b5deff] text-[24px] w-[176.59px]">
        <p className="leading-[32px]">Robert Jenkins</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] opacity-80 right-[32px] top-[112px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#b5deff] text-[14px] w-[168.8px]">
        <p className="leading-[20px]">Spouse • (555) 123-4567</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[32px] px-px py-[13px] right-[32px] rounded-[12px] top-[156px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#b5deff] text-[16px] text-center w-[119.14px]">
        <p className="leading-[24px]">One-Touch Call</p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="backdrop-blur-[8px] h-[238px] relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(141.943deg, rgb(0, 101, 145) 0%, rgb(0, 76, 110) 100%)" }} data-name="Section">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Section:shadow" />
      <Container51 />
      <Container53 />
      <Container54 />
      <Button4 />
    </div>
  );
}

function BioSnapshotCard() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[303.25px] relative row-1 self-start shrink-0" data-name="Bio Snapshot Card">
      <Section />
      <Section1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[24px] w-[252.66px]">
        <p className="leading-[32px]">Clinical Observations</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#c8e6ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[6px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e2f] text-[12px] w-[65.69px]">
          <p className="leading-[16px]">All Records</p>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0" data-name="Container">
      <Background11 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container56 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[18px] w-[250.31px]">
        <p className="leading-[28px]">Annual Physical Examination</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[261.38px]">
        <p className="leading-[20px]">Dr. Alistair Vance • Metropolitan Health</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[261.38px]" data-name="Container">
      <Heading6 />
      <Container60 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#c8e6ff] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[14px] w-[85.33px]">
        <p className="leading-[20px]">Oct 12, 2023</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Background13 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Overall health remains stable. Blood pressure recorded at 118/76.</p>
        <p className="leading-[22.75px] mb-0">Patient reports mild fatigue; Vitamin D levels checked. Recommended</p>
        <p className="leading-[22.75px] mb-0">increase in cardiovascular activity (30min 3x/week). No abnormalities</p>
        <p className="leading-[22.75px]">found in respiratory or abdominal examinations.</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[7.292px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.29167 11.6667">
        <g id="Container">
          <path d={svgPaths.p34537600} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container64 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[12px] w-[109.75px]">
        <p className="leading-[16px]">Full Lab Report.pdf</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p36dfb380} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container66 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006590] text-[12px] w-[111.5px]">
        <p className="leading-[16px]">Chest X-Ray.dicom</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] h-[16.9px] items-start pt-[0.9px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container65 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#f0f4f8] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[15.1px] items-start p-[24px] relative size-full">
        <Container58 />
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p19b12a00} fill="var(--fill-0, #006590)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-[#f6fafe] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center left-0 p-[2px] rounded-[9999px] size-[40px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-[#006590] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container67 />
    </div>
  );
}

function TimelineItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline Item 1">
      <div className="content-stretch flex flex-col items-start pb-[40px] pl-[48px] relative size-full">
        <Background12 />
        <BackgroundBorderShadow />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[18px] w-[204.61px]">
        <p className="leading-[28px]">Medication Adjustment</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[272.95px]">
        <p className="leading-[20px]">Telehealth Follow-up • Arcio Virtual Care</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[272.95px]" data-name="Container">
      <Heading7 />
      <Container70 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#dfe3e7] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[91.7px]">
        <p className="leading-[20px]">Aug 24, 2023</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container69 />
          <Background15 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Review of seasonal allergy response. Dosage of Cetirizine maintained.</p>
        <p className="leading-[22.75px] mb-0">Added Fluticasone propionate nasal spray for acute periods. Patient</p>
        <p className="leading-[22.75px] mb-0">advised on proper administration technique and potential dryness side</p>
        <p className="leading-[22.75px]">effects.</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#f0f4f8] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[15.125px] items-start p-[24px] relative size-full">
        <Container68 />
        <Container71 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[8.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 10.5">
        <g id="Container">
          <path d={svgPaths.p26a5b900} fill="var(--fill-0, #70787F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-[#f6fafe] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center left-0 p-[2px] rounded-[9999px] size-[40px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-[#c0c7cf] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container72 />
    </div>
  );
}

function TimelineItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline Item 2">
      <div className="content-stretch flex flex-col items-start pb-[40px] pl-[48px] relative size-full">
        <Background14 />
        <BackgroundBorderShadow1 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#171c1f] text-[18px] w-[191.69px]">
        <p className="leading-[28px]">Immunization Booster</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[189.88px]">
        <p className="leading-[20px]">Walgreens Pharmacy #4922</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[191.69px]" data-name="Container">
      <Heading8 />
      <Container75 />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#dfe3e7] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-[89.55px]">
        <p className="leading-[20px]">Jun 05, 2023</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Background17 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Tetanus, Diphtheria, Pertussis (Tdap) booster administered. No</p>
        <p className="leading-[22.75px] mb-0">immediate adverse reactions noted. Patient provided with CDC</p>
        <p className="leading-[22.75px]">information sheet.</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f0f4f8] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[14.75px] items-start p-[24px] relative size-full">
        <Container73 />
        <Container76 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[11.958px] relative shrink-0 w-[11.083px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0833 11.9583">
        <g id="Container">
          <path d={svgPaths.p25935c80} fill="var(--fill-0, #70787F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute bg-[#f6fafe] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center left-0 p-[2px] rounded-[9999px] size-[40px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-[#c0c7cf] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container77 />
    </div>
  );
}

function TimelineItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline Item 3">
      <div className="content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <Background16 />
        <BackgroundBorderShadow2 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[rgba(192,199,207,0.3)] bottom-[15.47px] left-[19px] top-[16px] w-[2px]" data-name="Vertical Divider" />
      <TimelineItem />
      <TimelineItem1 />
      <TimelineItem2 />
    </div>
  );
}

function SectionHistoryChronology() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Section - History Chronology">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.53px_0] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Section - History Chronology:shadow" />
        <Container55 />
        <Container57 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Active Medications</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[116.33px]">
        <p className="leading-[24px]">Lisinopril 10mg</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-[103.02px]">
        <p className="leading-[16px]">Daily • Oral Tablet</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116.33px]" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#006590] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container80 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[139.22px]">
        <p className="leading-[24px]">Metformin 500mg</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-[130.58px]">
        <p className="leading-[16px]">Twice Daily • Mealtime</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139.22px]" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#006590] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container84 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[16px] w-[146.77px]">
        <p className="leading-[24px]">Vitamin D3 2000IU</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-[170.64px]">
        <p className="leading-[16px]">Over-the-counter Supplement</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.64px]" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#70787f] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container88 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container83 />
      <Container87 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] col-1 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Overlay+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Overlay+Shadow" />
        <Heading9 />
        <Container78 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Medical Conditions</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-full">
          <p className="leading-[20px]">Mild Hypertension</p>
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-full">
          <p className="leading-[16px]">Diagnosed Jan 2021</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#eaeef2] relative rounded-[12px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#006590] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pl-[16px] pr-[12px] py-[12px] relative size-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171c1f] text-[14px] w-full">
          <p className="leading-[20px]">Seasonal Allergic Rhinitis</p>
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#40484e] text-[12px] w-full">
          <p className="leading-[16px]">Longstanding</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#eaeef2] relative rounded-[12px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#70787f] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pl-[16px] pr-[12px] py-[12px] relative size-full">
        <Container94 />
        <Container95 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundVerticalBorder />
      <BackgroundVerticalBorder1 />
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] col-2 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Overlay+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.05),0px_8px_10px_-6px_rgba(15,23,42,0.05)]" data-name="Overlay+Shadow" />
        <Heading10 />
        <Container91 />
      </div>
    </div>
  );
}

function ChronicConditionsBentoSegment() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] relative shrink-0 w-full" data-name="Chronic Conditions Bento Segment">
      <OverlayOverlayBlur />
      <OverlayOverlayBlur1 />
    </div>
  );
}

function MedicalHistoryNotes() {
  return (
    <div className="col-[5/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Medical History & Notes">
      <SectionHistoryChronology />
      <ChronicConditionsBentoSegment />
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <BioSnapshotCard />
      <MedicalHistoryNotes />
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(64,72,78,0.6)] w-[465.69px]">
          <p className="leading-[16px]">© 2024 Arcio Health Systems. All clinical data is encrypted and HIPAA compliant.</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(64,72,78,0.6)] w-[80.42px]">
        <p className="leading-[16px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(64,72,78,0.6)] w-[73.38px]">
        <p className="leading-[16px]">Access Logs</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(64,72,78,0.6)] w-[119.95px]">
        <p className="leading-[16px]">Request Amendment</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function FooterLegalCompliance() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="Footer / Legal Compliance">
      <div aria-hidden="true" className="absolute border-[rgba(192,199,207,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container27() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] p-[32px] relative size-full">
        <HeaderSection />
        <BentoGridLayout />
        <FooterLegalCompliance />
      </div>
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col isolate items-start min-w-px relative self-stretch" data-name="Main Content Canvas">
      <Container27 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full min-h-screen" data-name="Container">
      <MainContentCanvas />
    </div>
  );
}

export default function MyMedicalFile() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start relative w-full" data-name="My Medical File">
      <Container />
    </div>
  );
}

