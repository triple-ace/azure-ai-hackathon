import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'


function TsPlots() {
    const [AK, setAK] = useState("")
    const [AL, setAL] = useState("none")
    const [AZ, setAZ] = useState("none")
    const [CA, setCA] = useState("none")
    const [CT, setCT] = useState("none")
    const [DC, setDC] = useState("none")
    const [FL, setFL] = useState("none")
    const [GA, setGA] = useState("none")
    const [HI, setHI] = useState("none")
    const [IA, setIA] = useState("none")
    const [ID, setID] = useState("none")
    const [IL, setIL] = useState("none")
    const [IN, setIN] = useState("none")
    const [KS, setKS] = useState("none")
    const [KY, setKY] = useState("none")
    const [LA, setLA] = useState("none")
    const [MA, setMA] = useState("none")
    const [MD, setMD] = useState("none")
    const [MI, setMI] = useState("none")
    const [MN, setMN] = useState("none")
    const [MO, setMO] = useState("none")
    const [NC, setNC] = useState("none")
    const [ND, setND] = useState("none")
    const [NE, setNE] = useState("none")
    const [NJ, setNJ] = useState("none")
    const [NM, setNM] = useState("none")
    const [NV, setNV] = useState("none")
    const [NY, setNY] = useState("none")
    const [OH, setOH] = useState("none")
    const [OK, setOK] = useState("none")
    const [OR, setOR] = useState("none")
    const [PA, setPA] = useState("none")
    const [PR, setPR] = useState("none")
    const [SC, setSC] = useState("none")
    const [SD, setSD] = useState("none")
    const [TN, setTN] = useState("none")
    const [TX, setTX] = useState("none")
    const [UT, setUT] = useState("none")
    const [VA, setVA] = useState("none")
    const [WA, setWA] = useState("none")
    const [WI, setWI] = useState("none")

    function showAK() {
        setAK("");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }

    function showAL() {
        setAK("none");setAL("");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }

    function showAZ() {
        setAK("none");setAL("none");setAZ("");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showCA() {
        setAK("none");setAL("none");setAZ("none");setCA("");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showCT() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showDC() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showFL() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showGA() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showHI() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showIA() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showID() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showIL() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showIN() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showKS() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showKY() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showLA() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showMA() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showMD() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showMI() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showMN() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showMO() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showNC() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showND() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showNE() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showNJ() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showNM() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showNV() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showNY() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showOH() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showOK() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showOR() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showPA() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showPR() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showSC() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showSD() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showTN() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showTX() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showUT() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("");setVA("none");setWA("none");
        setWI("none");
    }
    function showVA() {
        setAK("");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("none");
    }
    function showWA() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("");
        setWI("none");
    }
    function showWI() {
        setAK("none");setAL("none");setAZ("none");setCA("none");setCT("none");setDC("none");setFL("none");setGA("none");setHI("none");setIA("none");
        setID("none");setIL("none");setIN("none");setKS("none");setKY("none");setLA("none");setMA("none");setMD("none");setMI("none");setMN("none");
        setMO("none");setNC("none");setND("none");setNE("none");setNJ("none");setNM("none");setNV("none");setNY("none");setOH("none");setOK("none");
        setOR("none");setPA("none");setPR("none");setSC("none");setSD("none");setTN("none");setTX("none");setUT("none");setVA("none");setWA("none");
        setWI("");
    }

    return (
        <div>
            <div>
                <ButtonGroup aria-label="Basic example" size="sm" style={{ width: "70vw", overflowX: "scroll" }}>
                    <Button variant="secondary" onClick={showAK}>AK</Button>
                    <Button variant="secondary" onClick={showAL}>AL</Button>
                    <Button variant="secondary" onClick={showAZ}>AZ</Button>
                    <Button variant="secondary" onClick={showCA}>CA</Button>
                    <Button variant="secondary" onClick={showCT}>CT</Button>
                    <Button variant="secondary" onClick={showDC}>DC</Button>
                    <Button variant="secondary" onClick={showFL}>FL</Button>
                    <Button variant="secondary" onClick={showGA}>GA</Button>
                    <Button variant="secondary" onClick={showHI}>HI</Button>
                    <Button variant="secondary" onClick={showIA}>IA</Button>
                    <Button variant="secondary" onClick={showID}>ID</Button>
                    <Button variant="secondary" onClick={showIL}>IL</Button>
                    <Button variant="secondary" onClick={showIN}>IN</Button>
                    <Button variant="secondary" onClick={showKS}>KS</Button>
                    <Button variant="secondary" onClick={showKY}>KY</Button>
                    <Button variant="secondary" onClick={showLA}>LA</Button>
                    <Button variant="secondary" onClick={showMA}>MA</Button>
                    <Button variant="secondary" onClick={showMD}>MD</Button>
                    <Button variant="secondary" onClick={showMI}>MI</Button>
                    <Button variant="secondary" onClick={showMN}>MN</Button>
                    <Button variant="secondary" onClick={showMO}>MO</Button>
                    <Button variant="secondary" onClick={showNC}>NC</Button>
                    <Button variant="secondary" onClick={showND}>ND</Button>
                    <Button variant="secondary" onClick={showNE}>NE</Button>
                    <Button variant="secondary" onClick={showNJ}>NJ</Button>
                    <Button variant="secondary" onClick={showNM}>NM</Button>
                    <Button variant="secondary" onClick={showNV}>NV</Button>
                    <Button variant="secondary" onClick={showNY}>NY</Button>
                    <Button variant="secondary" onClick={showOH}>OH</Button>
                    <Button variant="secondary" onClick={showOK}>OK</Button>
                    <Button variant="secondary" onClick={showOR}>OR</Button>
                    <Button variant="secondary" onClick={showPA}>PA</Button>
                    <Button variant="secondary" onClick={showPR}>PR</Button>
                    <Button variant="secondary" onClick={showSC}>SC</Button>
                    <Button variant="secondary" onClick={showSD}>SD</Button>
                    <Button variant="secondary" onClick={showTN}>TN</Button>
                    <Button variant="secondary" onClick={showTX}>TX</Button>
                    <Button variant="secondary" onClick={showUT}>UT</Button>
                    <Button variant="secondary" onClick={showVA}>VA</Button>
                    <Button variant="secondary" onClick={showWA}>WA</Button>
                    <Button variant="secondary" onClick={showWI}>WI</Button>
                </ButtonGroup>
            </div>
            <div>
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/AK_ts_plot.png"
                    alt="AK"
                    style={{
                        display: AK,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/AL_ts_plot.png"
                    alt="AL"
                    style={{
                        display: AL,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/AZ_ts_plot.png"
                    alt="AZ"
                    style={{
                        display: AZ,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/CA_ts_plot.png"
                    alt="CA"
                    style={{
                        display: CA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/CT_ts_plot.png"
                    alt="CT"
                    style={{
                        display: CT,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/DC_ts_plot.png"
                    alt="DC"
                    style={{
                        display: DC,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/FL_ts_plot.png"
                    alt="FL"
                    style={{
                        display: FL,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/GA_ts_plot.png"
                    alt="GA"
                    style={{
                        display: GA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/HI_ts_plot.png"
                    alt="HI"
                    style={{
                        display: HI,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/IA_ts_plot.png"
                    alt="IA"
                    style={{
                        display: IA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/ID_ts_plot.png"
                    alt="ID"
                    style={{
                        display: ID,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/IL_ts_plot.png"
                    alt="IL"
                    style={{
                        display: IL,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/IN_ts_plot.png"
                    alt="IN"
                    style={{
                        display: IN,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/KS_ts_plot.png"
                    alt="KS"
                    style={{
                        display: KS,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/KY_ts_plot.png"
                    alt="KY"
                    style={{
                        display: KY,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/LA_ts_plot.png"
                    alt="LA"
                    style={{
                        display: LA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/MA_ts_plot.png"
                    alt="MA"
                    style={{
                        display: MA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/MD_ts_plot.png"
                    alt="MD"
                    style={{
                        display: MD,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/MI_ts_plot.png"
                    alt="MI"
                    style={{
                        display: MI,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/MN_ts_plot.png"
                    alt="MN"
                    style={{
                        display: MN,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/MO_ts_plot.png"
                    alt="MO"
                    style={{
                        display: MO,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/NC_ts_plot.png"
                    alt="NC"
                    style={{
                        display: NC,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/ND_ts_plot.png"
                    alt="ND"
                    style={{
                        display: ND,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/NE_ts_plot.png"
                    alt="NE"
                    style={{
                        display: NE,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/NJ_ts_plot.png"
                    alt="NJ"
                    style={{
                        display: NJ,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/NM_ts_plot.png"
                    alt="NM"
                    style={{
                        display: NM,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/NV_ts_plot.png"
                    alt="NV"
                    style={{
                        display: NV,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/NY_ts_plot.png"
                    alt="NY"
                    style={{
                        display: NY,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/OH_ts_plot.png"
                    alt="OH"
                    style={{
                        display: OH,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/OK_ts_plot.png"
                    alt="OK"
                    style={{
                        display: OK,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/OR_ts_plot.png"
                    alt="OR"
                    style={{
                        display: OR,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/PA_ts_plot.png"
                    alt="PA"
                    style={{
                        display: PA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/PR_ts_plot.png"
                    alt="PR"
                    style={{
                        display: PR,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/SC_ts_plot.png"
                    alt="SC"
                    style={{
                        display: SC,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/SD_ts_plot.png"
                    alt="SD"
                    style={{
                        display: SD,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/TN_ts_plot.png"
                    alt="TN"
                    style={{
                        display: TN,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/TX_ts_plot.png"
                    alt="TX"
                    style={{
                        display: TX,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/UT_ts_plot.png"
                    alt="UT"
                    style={{
                        display: UT,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/VA_ts_plot.png"
                    alt="VA"
                    style={{
                        display: VA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/WA_ts_plot.png"
                    alt="WA"
                    style={{
                        display: WA,
                        height: "45vh",
                        width: "70vw"
                    }} />
                <img src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/time_series/WI_ts_plot.png"
                    alt="WI"
                    style={{
                        display: WI,
                        height: "45vh",
                        width: "70vw"
                    }} />

            </div>

        </div>
    )
}


export { TsPlots };