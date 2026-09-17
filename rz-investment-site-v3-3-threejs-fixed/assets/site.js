
(() => {
  const D = window.RZ_DATA;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showWebGLError(target, message){
    if(!target || target.querySelector('.webgl-error')) return;
    const box=document.createElement('div');
    box.className='webgl-error';
    box.innerHTML=`
      <div class="webgl-error-inner">
        <div class="webgl-error-code">WebGL dependency unavailable</div>
        <h3>3D research universe did not initialize.</h3>
        <p>${message}</p>
      </div>`;
    target.appendChild(box);
  }

  function header(page){
    const nav = [
      ['Home','index.html','home'],['Equities','equities.html','equities'],['Bonds','bonds.html','bonds'],
      ['Research','research.html','research'],['Models','models.html','models'],['About','about.html','about']
    ];
    document.querySelectorAll('[data-site-header]').forEach(el=>{
      el.innerHTML = `
        <a class="brand" href="index.html"><span class="brand-dot"></span><span>${D.site.mark}</span></a>
        <nav class="main-nav">${nav.map(n=>`<a class="${n[2]===page?'active':''}" href="${n[1]}">${n[0]}</a>`).join('')}</nav>
        <div class="header-meta">${D.site.strap}</div>`;
    });
  }

  function footer(){
    document.querySelectorAll('[data-site-footer]').forEach(el=>{
      el.innerHTML = `
        <h2 class="footer-cta">Ideas first.<br><span class="outline">Price second.</span></h2>
        <div class="footer-bottom">
          <div>© 2026 ${D.site.name}<br>Independent research</div>
          <div class="center">Price is observable. Value is argued.</div>
          <div class="right"><a class="footer-link" href="mailto:${D.site.email}">Contact</a><br><span>Replace email before launch</span></div>
        </div>`;
    });
  }

  function loader(){
    addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader')?.classList.add('gone'),reduced?20:650));
  }

  function animate(){
    if(window.gsap && window.ScrollTrigger){
      gsap.registerPlugin(ScrollTrigger);
      if(!reduced && window.Lenis){
        const lenis=new Lenis({duration:1.02,smoothWheel:true});
        lenis.on('scroll',ScrollTrigger.update);
        gsap.ticker.add(t=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0);
      }
      gsap.utils.toArray('.reveal').forEach(el=>gsap.to(el,{opacity:1,y:0,duration:reduced?0:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
      if(!reduced && document.querySelector('.hero-grid')) gsap.to('.hero-grid',{yPercent:16,opacity:.12,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
    }else document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
  }

  function renderHome(){
    const p=document.querySelector('#principles');
    if(p) p.innerHTML=D.philosophy.map(x=>`<div class="principle"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('');

    const f=document.querySelector('#featured-grid');
    if(f) f.innerHTML=D.featured.map((x,i)=>`
      <a class="feature ${x.size} reveal" href="${x.href}">
        <div class="feature-meta"><span>${x.category}</span><span>0${i+1}</span></div>
        <div class="feature-main"><div class="feature-code">${x.code}</div><h3>${x.title}</h3><p>${x.text}</p></div>
      </a>`).join('');

    initHero3D(); initUniverse3D();
  }

  function renderCaseTable(type){
    const items=type==='equity'?D.equityCases:D.bondCases;
    const el=document.querySelector('#case-table-body');
    if(!el)return;
    el.innerHTML=items.map(x=>`
      <tr>
        <td><div class="security">${x.ticker}</div><div class="subtext">${x.name}</div></td>
        <td class="question">${x.question}</td>
        <td><span class="tag">${x.lens}</span></td>
        <td><span class="tag ${x.status==='Live research'?'status-live':''}">${x.status}</span></td>
      </tr>`).join('');
  }

  function renderEquitySpotlight(){
    const s=D.equitySpotlight, root=document.querySelector('#equity-spotlight'); if(!root||!s)return;
    root.innerHTML=`
      <div class="kicker reveal"><b>${s.kicker.split(' / ')[0]}</b>${s.kicker.split(' / ').slice(1).join(' / ')}</div>
      <div class="dossier reveal">
        <div class="dossier-main"><div class="dossier-label">Central question</div><h2 class="dossier-title">${s.title}</h2>
          <div class="dossier-block"><div class="dossier-label">Market must believe</div><p>${s.market}</p></div>
          <div class="dossier-block"><div class="dossier-label">Research hypothesis</div><p>${s.hypothesis}</p></div>
          <div class="dossier-block"><div class="dossier-label">Falsifier</div><p>${s.falsifier}</p></div>
        </div>
        <div class="dossier-side"><div class="metric-grid">${s.metrics.map(m=>`<div class="metric"><span>${m[0]}</span><strong>${m[1]}</strong></div>`).join('')}</div></div>
      </div>`;
  }

  function renderBondSpotlight(){
    const s=D.bondSpotlight, root=document.querySelector('#bond-spotlight'); if(!root||!s)return;
    root.innerHTML=`
      <div class="kicker reveal"><b>${s.kicker.split(' / ')[0]}</b>${s.kicker.split(' / ').slice(1).join(' / ')}</div>
      <h2 class="display reveal">${s.title}</h2><p class="lede reveal" style="margin-top:34px">${s.intro}</p>
      <div class="claim-stack reveal">${s.claims.map(c=>`<div class="claim"><span class="claim-rank">${c[0]}</span><div><h3>${c[1]}</h3><p>${c[2]}</p></div><span class="claim-risk">${c[3]}</span></div>`).join('')}</div>`;
  }

  function renderArchive(){
    const list=document.querySelector('#archive-list'); if(!list)return;
    const buttons=[...document.querySelectorAll('.filter-btn')];
    function draw(filter='All'){
      list.innerHTML=D.research.filter(r=>filter==='All'||r.cat===filter).map(r=>`
      <a class="archive-row" href="${r.href}">
        <span class="archive-date">${r.date}</span><h3>${r.title}</h3>
        <span class="archive-cat">${r.cat}</span><span class="archive-status">${r.status}</span>
      </a>`).join('');
    }
    buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');draw(b.dataset.filter)}));
    draw();
  }

  function initModels(){
    const price=document.querySelector('#m-price'), oe=document.querySelector('#m-oe'), growth=document.querySelector('#m-growth'),
          exit=document.querySelector('#m-exit'), hurdle=document.querySelector('#m-hurdle');
    if(price&&oe&&growth&&exit&&hurdle){
      const calc=()=>{
        const P=+price.value, E=+oe.value, g=+growth.value/100, M=+exit.value, r=+hurdle.value/100, years=10;
        let pv=0, e=E;
        for(let y=1;y<=years;y++){e*=1+g;pv+=e/Math.pow(1+r,y)}
        const term=e*M/Math.pow(1+r,years);
        const iv=pv+term;
        const irr=Math.pow((e*M)/Math.max(P,1),1/years)-1;
        const mos=(iv/P-1)*100;
        document.querySelector('#out-price').textContent='$'+P.toFixed(0);
        document.querySelector('#out-oe').textContent='$'+E.toFixed(1);
        document.querySelector('#out-growth').textContent=(g*100).toFixed(1)+'%';
        document.querySelector('#out-exit').textContent=M.toFixed(0)+'×';
        document.querySelector('#out-hurdle').textContent=(r*100).toFixed(1)+'%';
        document.querySelector('#iv').textContent=Math.round(iv);
        document.querySelector('#irr').textContent=(irr*100).toFixed(1)+'%';
        document.querySelector('#mos').textContent=(mos>=0?'+':'')+mos.toFixed(1)+'%';
        document.querySelector('#pv-earnings').textContent='$'+Math.round(pv);
        document.querySelector('#pv-terminal').textContent='$'+Math.round(term);
      };
      [price,oe,growth,exit,hurdle].forEach(x=>x.addEventListener('input',calc)); calc();
    }

    const bp=document.querySelector('#b-price'), coupon=document.querySelector('#b-coupon'), mat=document.querySelector('#b-maturity'), fairY=document.querySelector('#b-fairyield');
    if(bp&&coupon&&mat&&fairY){
      function bondPrice(y,c,n,face=100){let v=0;for(let t=1;t<=n;t++)v+=c/Math.pow(1+y,t);return v+face/Math.pow(1+y,n)}
      function ytm(target,c,n){let lo=.00001,hi=.35;for(let i=0;i<100;i++){let mid=(lo+hi)/2;bondPrice(mid,c,n)>target?lo=mid:hi=mid}return(lo+hi)/2}
      const calc=()=>{
        const P=+bp.value,C=+coupon.value,N=+mat.value,FY=+fairY.value/100;
        const y=ytm(P,C,N); const fv=bondPrice(FY,C,N);
        let macaulay=0; for(let t=1;t<=N;t++){let cf=t===N?C+100:C;macaulay+=t*cf/Math.pow(1+y,t)} macaulay/=P;
        const mod=macaulay/(1+y); const dv01=mod*P*.0001;
        document.querySelector('#out-bprice').textContent='$'+P.toFixed(1);
        document.querySelector('#out-coupon').textContent=C.toFixed(1)+'%';
        document.querySelector('#out-maturity').textContent=N+'Y';
        document.querySelector('#out-fairyield').textContent=(FY*100).toFixed(2)+'%';
        document.querySelector('#ytm').textContent=(y*100).toFixed(2)+'%';
        document.querySelector('#fair-price').textContent='$'+fv.toFixed(1);
        document.querySelector('#duration').textContent=mod.toFixed(2);
        document.querySelector('#dv01').textContent='$'+dv01.toFixed(3);
      };
      [bp,coupon,mat,fairY].forEach(x=>x.addEventListener('input',calc)); calc();
    }
  }

  function initHero3D(){
    if(!window.THREE){
      console.error('Three.js failed to load. Hero WebGL disabled.');
      return;
    } const canvas=document.querySelector('#hero-canvas'); const hero=canvas?.parentElement;if(!canvas||!hero)return;
    const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(0,.15,7.2);
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));
    const group=new THREE.Group();scene.add(group);
    const accent=0xd9ff53;
    const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.68,4),new THREE.MeshPhysicalMaterial({color:0x1b1d20,roughness:.32,metalness:.75}));group.add(core);
    const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.71,2),new THREE.MeshBasicMaterial({color:accent,wireframe:true,transparent:true,opacity:.16}));group.add(wire);
    [2.15,2.65,3.25].forEach((r,i)=>{const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.006,8,160),new THREE.MeshBasicMaterial({color:i===1?accent:0x999999,transparent:true,opacity:i===1?.34:.13}));ring.rotation.x=1.05+i*.28;ring.rotation.y=.2+i*.56;group.add(ring)});
    const nodes=[];for(let i=0;i<18;i++){const n=new THREE.Mesh(new THREE.SphereGeometry(.055,16,16),new THREE.MeshBasicMaterial({color:i%5===0?accent:0xd4d4cf}));n.userData={r:2.1+Math.random()*1.3,s:.12+Math.random()*.18,o:Math.random()*Math.PI*2,y:.4+Math.random()*.9};group.add(n);nodes.push(n)}
    scene.add(new THREE.AmbientLight(0xffffff,.65));const key=new THREE.DirectionalLight(accent,7);key.position.set(3,2,5);scene.add(key);const fill=new THREE.PointLight(0x6a7dff,18,20);fill.position.set(-4,-2,4);scene.add(fill);
    const pointer={x:0,y:0};addEventListener('pointermove',e=>{pointer.x=e.clientX/innerWidth-.5;pointer.y=e.clientY/innerHeight-.5},{passive:true});
    const resize=()=>{const r=hero.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix()};resize();addEventListener('resize',resize);
    const clock=new THREE.Clock();function tick(){const t=clock.getElapsedTime();if(!reduced){group.rotation.y+=(pointer.x*.38-group.rotation.y)*.035;group.rotation.x+=(-pointer.y*.22-group.rotation.x)*.035;core.rotation.y=t*.06;wire.rotation.y=-t*.09;nodes.forEach((n,i)=>{const d=n.userData,a=t*d.s+d.o;n.position.set(Math.cos(a)*d.r,Math.sin(a*1.7+i)*d.y,Math.sin(a)*d.r)})}renderer.render(scene,camera);requestAnimationFrame(tick)}tick();
  }

  function initUniverse3D(){
    const canvas=document.querySelector('#universe-canvas');
    const wrap=canvas?.closest('.universe-wrap');

    if(!window.THREE){
      console.error('Three.js failed to load. Research universe disabled.');
      showWebGLError(
        wrap,
        'The Three.js browser library did not load. This is a dependency problem, not a mouse or drag problem. Check the network connection or CDN availability.'
      );
      return;
    }
    const labelLayer=document.querySelector('#universe-label-layer');
    const countEl=document.querySelector('#universe-count');
    const orbitReadout=document.querySelector('#orbit-readout');
    const resetButton=document.querySelector('#universe-reset');
    if(!canvas||!wrap)return;

    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(42,1,.1,100);
    camera.position.set(0,1.5,10.8);

    const renderer=new THREE.WebGLRenderer({
      canvas,
      alpha:true,
      antialias:true,
      powerPreference:'high-performance'
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));

    const rig=new THREE.Group();
    scene.add(rig);

    const meshes=[];
    const labels=[];
    const accent=0xd9ff53;

    if(countEl) countEl.textContent=`${D.universe.length} research objects`;

    let suppressLabelClickUntil=0;

    D.universe.forEach((h,i)=>{
      const material=new THREE.MeshPhysicalMaterial({
        color:i===0?accent:0xd7d8d2,
        emissive:i===0?0x536114:0x111214,
        emissiveIntensity:i===0?.8:.12,
        roughness:.28,
        metalness:.65
      });

      const m=new THREE.Mesh(new THREE.IcosahedronGeometry(h.size,2),material);
      m.position.set(...h.pos);
      m.userData={...h,index:i};
      rig.add(m);
      meshes.push(m);

      rig.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0,0,0),
          m.position.clone()
        ]),
        new THREE.LineBasicMaterial({
          color:0x55595f,
          transparent:true,
          opacity:.25
        })
      ));

      if(labelLayer){
        const b=document.createElement('button');
        b.type='button';
        b.className='universe-label'+(h.conviction==='Verify'?' reserved':'');
        b.textContent=h.ticker;
        b.setAttribute('aria-label',`Inspect ${h.ticker}: ${h.name}`);

        b.addEventListener('click',(e)=>{
          e.stopPropagation();
          if(performance.now()<suppressLabelClickUntil)return;
          select(h);
        });

        labelLayer.appendChild(b);
        labels.push({el:b,mesh:m,data:h});
      }
    });

    rig.add(new THREE.Mesh(
      new THREE.SphereGeometry(.13,24,24),
      new THREE.MeshBasicMaterial({color:accent})
    ));

    [2.4,3.6,4.7].forEach((r,i)=>{
      const ring=new THREE.Mesh(
        new THREE.TorusGeometry(r,.008,6,120),
        new THREE.MeshBasicMaterial({
          color:i===1?accent:0x7a7e84,
          transparent:true,
          opacity:i===1?.16:.09
        })
      );
      ring.rotation.x=1.22+i*.25;
      ring.rotation.y=.3+i*.36;
      rig.add(ring);
    });

    scene.add(new THREE.AmbientLight(0xffffff,1.2));

    const point=new THREE.PointLight(accent,18,30);
    point.position.set(3,4,6);
    scene.add(point);

    const cool=new THREE.PointLight(0x7180ff,8,24);
    cool.position.set(-4,-2,5);
    scene.add(cool);

    // -----------------------------------------------------------------
    // ORBIT STATE
    //
    // Important fix:
    // Orbit interaction is attached to the WHOLE universe wrapper rather
    // than only the canvas. This means ticker labels and canvas overlays
    // can coexist without breaking drag rotation.
    // -----------------------------------------------------------------
    const HOME={pitch:.08,yaw:-.12};
    let targetPitch=HOME.pitch;
    let targetYaw=HOME.yaw;
    let pitch=targetPitch;
    let yaw=targetYaw;

    let velocityPitch=0;
    let velocityYaw=0;

    let activePointer=null;
    let startTarget=null;
    let lastX=0,lastY=0;
    let moved=0;
    let interacting=false;
    let lastInteraction=performance.now();

    function clampPitch(v){
      return Math.max(-1.05,Math.min(1.05,v));
    }

    function updateOrbitReadout(){
      if(!orbitReadout)return;
      const x=Math.round(THREE.MathUtils.radToDeg(pitch));
      const y=Math.round(THREE.MathUtils.radToDeg(yaw));
      orbitReadout.textContent=`X ${x>=0?'+':''}${x}° / Y ${y>=0?'+':''}${y}°`;
    }

    function startDrag(e){
      // The detail card should remain selectable / scrollable text.
      if(e.target.closest('.universe-detail') || e.target.closest('.universe-reset')) return;
      if(activePointer!==null)return;

      activePointer=e.pointerId;
      startTarget=e.target;
      lastX=e.clientX;
      lastY=e.clientY;
      moved=0;
      interacting=true;
      lastInteraction=performance.now();

      wrap.classList.add('is-dragging');

      // Capture on the wrapper, not the canvas.
      try{wrap.setPointerCapture?.(e.pointerId)}catch(_){}

      // Mouse dragging should never select text or native-drag controls.
      if(e.pointerType==='mouse')e.preventDefault();
    }

    function moveDrag(e){
      if(e.pointerId!==activePointer)return;

      const dx=e.clientX-lastX;
      const dy=e.clientY-lastY;

      moved+=Math.abs(dx)+Math.abs(dy);

      // Normalize sensitivity to panel size so drag feels consistent.
      const rect=wrap.getBoundingClientRect();
      const yawDelta=(dx/Math.max(rect.width,320))*4.8;
      const pitchDelta=(dy/Math.max(rect.height,320))*3.8;

      targetYaw+=yawDelta;
      targetPitch=clampPitch(targetPitch+pitchDelta);

      // Inertia after pointer release.
      velocityYaw=yawDelta*.65;
      velocityPitch=pitchDelta*.48;

      lastX=e.clientX;
      lastY=e.clientY;
      lastInteraction=performance.now();

      // Once a drag is clearly underway, suppress accidental ticker click.
      if(moved>7)suppressLabelClickUntil=performance.now()+220;

      if(e.pointerType==='mouse')e.preventDefault();
    }

    function endDrag(e){
      if(activePointer===null)return;
      if(e.pointerId!==undefined && e.pointerId!==activePointer)return;

      activePointer=null;
      interacting=false;
      lastInteraction=performance.now();
      wrap.classList.remove('is-dragging');

      try{wrap.releasePointerCapture?.(e.pointerId)}catch(_){}
    }

    // Capture phase ensures we still see pointerdown when a ticker label
    // is the original event target.
    wrap.addEventListener('pointerdown',startDrag,{capture:true});
    window.addEventListener('pointermove',moveDrag,{passive:false});
    window.addEventListener('pointerup',endDrag);
    window.addEventListener('pointercancel',endDrag);

    // Keyboard alternative: focus canvas and use arrows.
    canvas.addEventListener('keydown',(e)=>{
      const step=e.shiftKey?.24:.12;
      if(e.key==='ArrowLeft'){targetYaw-=step;e.preventDefault();}
      else if(e.key==='ArrowRight'){targetYaw+=step;e.preventDefault();}
      else if(e.key==='ArrowUp'){targetPitch=clampPitch(targetPitch-step);e.preventDefault();}
      else if(e.key==='ArrowDown'){targetPitch=clampPitch(targetPitch+step);e.preventDefault();}
      else if(e.key==='Home'){
        targetPitch=HOME.pitch;targetYaw=HOME.yaw;
        velocityPitch=velocityYaw=0;
        e.preventDefault();
      }
      lastInteraction=performance.now();
    });

    if(resetButton){
      resetButton.addEventListener('click',()=>{
        targetPitch=HOME.pitch;
        targetYaw=HOME.yaw;
        velocityPitch=0;
        velocityYaw=0;
        lastInteraction=performance.now();
        canvas.focus({preventScroll:true});
      });
    }

    // ---------------------------------------------------------------
    // SECURITY SELECTION
    // ---------------------------------------------------------------
    const ray=new THREE.Raycaster();
    const mouse=new THREE.Vector2();

    function select(h){
      ['name','type','ticker','thesis','conviction','horizon','lens'].forEach(k=>{
        const el=document.querySelector('#detail-'+k);
        if(el)el.textContent=h[k];
      });

      meshes.forEach((m,i)=>{
        const selected=i===h.index;
        m.material.emissive.setHex(selected?0x536114:0x111214);
        m.material.emissiveIntensity=selected?.95:.12;
        m.scale.setScalar(selected?1.12:1);
      });

      labels.forEach(x=>{
        x.el.classList.toggle('selected',x.data.index===h.index);
      });
    }

    canvas.addEventListener('click',e=>{
      if(moved>7)return;

      const r=canvas.getBoundingClientRect();
      mouse.x=((e.clientX-r.left)/r.width)*2-1;
      mouse.y=-((e.clientY-r.top)/r.height)*2+1;
      ray.setFromCamera(mouse,camera);

      const hit=ray.intersectObjects(meshes,false)[0];
      if(hit)select(hit.object.userData);
    });

    function resize(){
      const r=canvas.getBoundingClientRect();
      renderer.setSize(r.width,r.height,false);
      camera.aspect=r.width/r.height;
      camera.updateProjectionMatrix();
    }

    resize();
    window.addEventListener('resize',resize);

    // ---------------------------------------------------------------
    // PROJECT DOM TICKER LABELS TO EACH 3D NODE
    // ---------------------------------------------------------------
    const projected=new THREE.Vector3();

    function updateLabels(){
      if(!labelLayer)return;

      const rect=canvas.getBoundingClientRect();

      labels.forEach(({el,mesh})=>{
        mesh.getWorldPosition(projected);
        projected.project(camera);

        const visible=
          projected.z>-1 && projected.z<1 &&
          projected.x>-1.15 && projected.x<1.15 &&
          projected.y>-1.15 && projected.y<1.15;

        el.classList.toggle('offscreen',!visible);
        if(!visible)return;

        el.style.left=`${(projected.x*.5+.5)*rect.width}px`;
        el.style.top=`${(-projected.y*.5+.5)*rect.height}px`;

        const depth=Math.max(.58,Math.min(1,1-(projected.z+.3)*.18));
        el.style.opacity=String(depth);
      });
    }

    // ---------------------------------------------------------------
    // RENDER LOOP
    // ---------------------------------------------------------------
    const clock=new THREE.Clock();

    function tick(){
      const t=clock.getElapsedTime();

      // Inertial follow.
      pitch+=(targetPitch-pitch)*.15;
      yaw+=(targetYaw-yaw)*.15;

      if(!interacting){
        targetYaw+=velocityYaw;
        targetPitch=clampPitch(targetPitch+velocityPitch);

        velocityYaw*=.92;
        velocityPitch*=.90;

        if(Math.abs(velocityYaw)<.00001)velocityYaw=0;
        if(Math.abs(velocityPitch)<.00001)velocityPitch=0;
      }

      // Very slow ambient drift only when the user has been idle.
      if(!reduced && !interacting && performance.now()-lastInteraction>2200){
        targetYaw+=.00035;
      }

      rig.rotation.x=pitch;
      rig.rotation.y=yaw;

      meshes.forEach((m,i)=>{
        if(!reduced){
          m.rotation.x=t*(.08+i*.004);
          m.rotation.y=t*(.10+i*.005);
        }
      });

      renderer.render(scene,camera);
      updateLabels();
      updateOrbitReadout();

      requestAnimationFrame(tick);
    }

    if(D.universe.length)select(D.universe[0]);
    updateOrbitReadout();
    tick();
  }

  const page=document.body.dataset.page||'home';
  header(page); footer(); loader();
  if(page==='home')renderHome();
  if(page==='equities'){renderCaseTable('equity');renderEquitySpotlight();}
  if(page==='bonds'){renderCaseTable('bond');renderBondSpotlight();}
  if(page==='research')renderArchive();
  if(page==='models')initModels();
  animate();
})();
