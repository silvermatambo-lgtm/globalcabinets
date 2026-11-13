/* Global Cabinets Hub — client configuration for UltraMax 7 Pro Premium. */
(() => {
  const cabinetry = [
    {name:'Kitchen cabinetry', detail:'Plan cabinetry around the way you cook, clean and move through your kitchen. We can discuss drawer layouts, appliance spaces, door finishes and practical storage for your room.', points:['Fitted cupboards','Drawer and pantry layouts','Appliance spaces'], question:'Is this a new kitchen or a renovation, and which cupboards or appliance spaces do you need?', image:'/assets/kitchen-warm.webp', alt:'Cream kitchen cabinetry with warm lighting and slatted wood accents'},
    {name:'Wardrobes & storage', detail:'Make space for the things you use every day. Discuss a mix of hanging space, drawers and shelves, with the door layout and finishes suited to your room.', points:['Bedroom wardrobes','Shelves and drawers','Hanging space'], question:'What room is the wardrobe for, and do you need more hanging space, shelving or drawers?', image:'/assets/poster-wardrobe.webp', alt:'Full-height bedroom wardrobe with a combination of closed doors and open shelves'},
    {name:'TV units & media walls', detail:'Bring the TV, media equipment and living-room storage into one considered layout. Explore floating units, open display shelves and feature-wall finishes.', points:['Floating units','Feature panels','Media storage'], question:'What size TV do you have, and are you looking for a floating unit, a full feature wall or both?', image:'/assets/media-wall.webp', alt:'White floating TV unit below a stone-look panel and dark wood slats'}
  ];
  const photos = [
    ['Warm ivory & timber','Kitchens','kitchen-warm','Cream doors, timber slats and warm cabinet lighting.'],
    ['Light fitted wardrobe','Wardrobes','poster-wardrobe','Full-height wardrobe inspiration with open shelving alongside closed storage.'],
    ['Floating media wall','TV units','media-wall','A floating white unit with a marble-look panel set against timber slats.'],
    ['Matte grey kitchen','Kitchens','kitchen-grey','A compact one-wall layout with clean lines and under-cabinet lighting.'],
    ['Graphite wardrobe','Wardrobes','wardrobe-grey','A charcoal wardrobe with full-height doors and lower drawers.'],
    ['Low-profile TV console','TV units','poster-media','Wood-tone and white cabinetry inspiration for a living-room console.'],
    ['Burgundy & brass','Kitchens','kitchen-wine','Deep burgundy cabinetry with brass-tone handles and a marble-look surround.'],
    ['Mirrored wardrobe','Wardrobes','wardrobe-white','An open and closed view of a mirrored wardrobe with shelves and two drawers.'],
    ['Media wall from the side','TV units','media-detail','An angled view of the feature panel, shelving and floating cabinet.'],
    ['Navy & gold','Kitchens','kitchen-navy','Dark cabinetry paired with light counters and gold-tone hardware.'],
    ['Clean white cabinetry','Kitchens','kitchen-white','A straight kitchen layout with white doors and a contrasting dark splashback.'],
    ['Natural wood kitchen','Kitchens','poster-kitchen','Wood-tone and light shaker-style doors with a marble-look splashback.'],
    ['Timber kitchen installation','Kitchens','kitchen-install','A fitting-stage look at timber-look upper and lower cabinetry.'],
    ['Kitchen sink run','Kitchens','kitchen-sink','Another angle on the timber-look kitchen cabinetry, showing the sink run.'],
    ['Inside the TV unit','TV units','media-open','The same floating unit with its doors open to show the storage compartments.']
  ];
  window.ULTRAMAX_SITE = Object.freeze({
    companyName:'Global Cabinets Hub (Pty) Ltd', brandName:'Global Cabinets Hub',
    brandInitials:'GC', brandLogo:'/assets/cabinet-mark.png',
    whatsappNumber:'27833389786', phoneNumber:'083 338 9786', email:'info@globalcabinetshub.co.za',
    websiteUrl:'https://www.globalcabinetshub.co.za', theme:{navy:'#211d19',teal:'#d6ac64',tealDeep:'#745021'},
    demoMode:false, industry:'cabinetry', industries:{cabinetry},
    serviceOptions:cabinetry.map(service=>service.name),
    projects:photos.map(([title,category,file,description])=>({title,category,image:'/assets/'+file+'.webp',description})),
    stats:[{value:3,label:'Cabinetry collections'},{value:4,label:'Steps from brief to fitting'},{value:24,suffix:'/7',label:'Automated enquiry assistant'}],
    timeline:[
      {title:'Share your brief',text:'Tell us what you want to change, where the project is and what you need to store.'},
      {title:'Review the layout',text:'Discuss measurements, door styles, finishes, handles and appliance or TV clearances.'},
      {title:'Confirm the quote',text:'Review the scope and confirm the design, pricing and expected installation timing.'},
      {title:'Fit the cabinetry',text:'Arrange a fitting date and review the installed cabinetry together.'}
    ],
    beforeAfter:{before:'/assets/media-wall.webp',after:'/assets/media-open.webp',beforeAlt:'Floating media cabinet with doors closed',afterAlt:'The same media cabinet with doors open',leftLabel:'closed',title:'A closer look at the storage',caption:'Two angles on the same floating TV unit. Slide to compare its closed and open cabinet doors.'}
  });
})();
