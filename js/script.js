let myprojects = document.getElementById('myprojects');
let mycertificats = document.getElementById('mycertificats');

for(var i=0; i<myprojectsarr.length; i++){
    var div = document.createElement('div');
    div.className = 'bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-md hover:border-blue-500/50 transition';
    div.innerHTML = `
    <div class="h-40 bg-gray-800 flex items-center justify-center text-gray-500">
        <i class="fa-solid fa-code text-4xl"></i>
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-white">${myprojectsarr[i].name}</h3>
        <p class="text-gray-400 text-sm mb-4">${myprojectsarr[i].des}</p>
        <div class="flex items-center justify-between">
            <span class="text-xs bg-blue-900/50 text-blue-300 px-2.5 py-1 rounded">${myprojectsarr[i].gat}</span>
            <a href="html/project.html?id=${myprojectsarr[i].id}" class="text-blue-400 hover:underline text-sm font-medium">عرض المشروع <i class="fa-solid fa-arrow-left mr-1"></i></a>
        </div>
    </div>`;
    myprojects.appendChild(div);
}

for(var j=0; j<mycertificatsarr.length; j++){
    var div = document.createElement('div');
    div.className = 'bg-gray-800/40 border border-gray-800 p-4 rounded-xl flex items-center justify-between hover:border-blue-500/50 transition';
    div.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <i class="fa-solid fa-certificate"></i>
            </div>
            <div>
                <h4 class="font-bold text-white">${mycertificatsarr[j].name}</h4>
                <p class="text-sm text-gray-400">${mycertificatsarr[j].from}</p>
            </div>
        </div>
        <a href="./../html/certificat.html?id=${mycertificatsarr[j].id}" class="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded border border-gray-700 text-gray-300 transition">عرض الشهادة</a> 
        `;
        mycertificats.appendChild(div);
}