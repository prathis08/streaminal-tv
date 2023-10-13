class Utilities {
    static renameKey(object, oldKey, newKey) {
        if (oldKey !== newKey) {
            Object.defineProperty(
                object,
                newKey,
                Object.getOwnPropertyDescriptor(object, oldKey)
            );
            delete object[oldKey];
        }
    }

    static cleanStreamData(streamData) {
        streamData.sources.map(function (item) {
            delete item.isM3U8;
            return item;
        });

        streamData.sources.forEach((obj) => {
            this.renameKey(obj, "url", "file");
            this.renameKey(obj, "quality", "label");
        });

        streamData.subtitles.forEach((obj) => {
            this.renameKey(obj, "url", "file");
            this.renameKey(obj, "lang", "language");
            obj["lang"] = obj["language"];
        });
        return streamData;
    }
}

export default Utilities;
