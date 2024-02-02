// 文件
import fs from 'node:fs'
// 路径
import path from 'node:path'

//文件后缀
const fileSuffix = '.txt'
// 文件根目录，拼接src
const countRootDir = path.resolve("./src/count") + "\\";
// console.log('countRootDir => ', countRootDir);
// let countRootDir = 'src/count/'

// 处理统计数据
export function dealFileReadCount(id, pageTitle) {
    // console.log(id, pageTitle);
    let countNum = 0;
    // let curFilePath = countRootDir + pageTitle + id + fileSuffix;
    // console.log('curFileDir => ', curFilePath);
    // fs.access(curFilePath,(err) => {
    //     if (err) {
    //         console.log('文件' + curFilePath + '不存在');
    //         try {
    //             fs.appendFileSync(curFilePath, '1', 'utf-8')
    //         } catch (err) {
    //             console.log('创建文件' + curFilePath + '失败 => ', err);
    //         }
    //     } else {
    //         console.log('文件' + curFilePath + '存在');
    //         let count = '';
    //         try {
    //             count = fs.readFileSync(curFilePath, 'utf-8');
    //         } catch (err) {
    //             console.log('读取文件' + curFilePath + '失败 => ', err);
    //         }
            
    //         console.log('文件' + curFilePath + ' => ', count);
            
    //         if (count == '') {
    //             console.log('文件内' + curFilePath + '容为空', count);
    //         } else {
    //             countNum = parseInt(count);
    //         }
    //         countNum += 1;
    //         try {
    //             fs.writeFileSync(curFilePath, '' + countNum, 'utf-8')
    //         } catch (err) {
    //             console.log('写入文件' + curFilePath + '失败 => ', err);
    //         }
    //     }
    // });

    return countNum
}
