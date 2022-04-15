// The transformFactory class is a wrapper around the model types in Azure Media Services to make code look a lot cleaner
// when creating custom encoding transforms.  The goal of the transformFactory is to eliminate the need for declaring the odataType strings constantly 
// while working with the Typescript types that are generated by the Azure SDK auto generation code. 
// This helps to clean up your custom Transform code and keeps things neat.
// 
// NOTE: This is not complete list here, so feel free to add new codecs, formats, or preset types you would like to simplify in your code. 

import {
    AacAudio,
    H264Layer,
    H264Video,
    H265Video,
    H265Layer,
    Mp4Format,
    PngFormat,
    PngImage,
    PngLayer,
    JpgFormat,
    JpgLayer,
    JpgImage,
    StandardEncoderPreset,
    BuiltInStandardEncoderPreset,
    SelectAudioTrackById,
    SelectAudioTrackByAttribute,
    InputFile,
    JobInputAsset,
    JobInputHttp,
    JobInputs,
    JobOutputAsset,
    AudioAnalyzerPresetUnion,
    VideoAnalyzerPreset,
    AudioAnalyzerPreset,
    VideoOverlay,
    JobInputSequence,
    CopyVideo,
    CopyAudio,
    TransportStreamFormat,
    JobInputClip,
} from "@azure/arm-mediaservices"


export function createCopyVideo(video: Omit<CopyVideo, "odataType">): CopyVideo {
    return {
        odataType: "#Microsoft.Media.CopyVideo",
        ...video,
    }
}

export function createCopyAudio(audio: Omit<CopyAudio, "odataType">): CopyAudio {
    return {
        odataType: "#Microsoft.Media.CopyAudio",
        ...audio,
    }
}

export function createH264Video(video: Omit<H264Video, "odataType">): H264Video {
    return {
        odataType: "#Microsoft.Media.H264Video",
        ...video,
    }
}

export function createH264Layer(layer: Omit<H264Layer, "odataType">): H264Layer {
    return {
        //odataType: "#Microsoft.Media.H264Layer",
        ...layer,
    }
}

export function createH265Video(video: Omit<H265Video, "odataType">): H265Video {
    return {
        odataType: "#Microsoft.Media.H265Video",
        ...video,
    }
}

export function createH265Layer(layer: Omit<H265Layer, "odataType">): H265Layer {
    return {
        //odataType: "#Microsoft.Media.H265Layer",
        ...layer,
    }
}

export function createAACaudio(audio: Omit<AacAudio, "odataType">): AacAudio {
    return {
        odataType: "#Microsoft.Media.AacAudio",
        ...audio,
    }
}

export function createPngImage(image: Omit<PngImage, "odataType">): PngImage {
    return {
        odataType: "#Microsoft.Media.PngImage",
        ...image,
    }
}

export function createPngLayer(image: Omit<PngLayer, "odataType">): PngLayer {
    return {
        //odataType: "#Microsoft.Media.PngLayer",
        ...image,
    }
}

export function createPngFormat(pngFormat: Omit<PngFormat, "odataType">): PngFormat {
    return {
        odataType: "#Microsoft.Media.PngFormat",
        ...pngFormat,
    }
}

export function createJpgImage(image: Omit<JpgImage, "odataType">): JpgImage {
    return {
        odataType: "#Microsoft.Media.JpgImage",
        ...image,
    }
}

export function createJpgLayer(image: Omit<JpgLayer, "odataType">): JpgLayer {
    return {
        //odataType: "#Microsoft.Media.JpgLayer",
        ...image,
    }
}

export function createJpgFormat(format: Omit<JpgFormat, "odataType">): JpgFormat {
    return {
        odataType: "#Microsoft.Media.JpgFormat",
        ...format,
    }
}

export function createStandardEncoderPreset(standardEncoder: Omit<StandardEncoderPreset, "odataType">): StandardEncoderPreset {
    return {
        odataType: "#Microsoft.Media.StandardEncoderPreset",
        ...standardEncoder,
    }
}

export function createBuiltInStandardEncoderPreset(builtInStandardEncoder: Omit<BuiltInStandardEncoderPreset, "odataType">): BuiltInStandardEncoderPreset {
    return {
        odataType: "#Microsoft.Media.BuiltInStandardEncoderPreset",
        ...builtInStandardEncoder,
    }
}

export function createAudioAnalyzerPreset(audioAnalyserPreset: Omit<AudioAnalyzerPresetUnion, "odataType">): AudioAnalyzerPreset {
    return {
        odataType: "#Microsoft.Media.AudioAnalyzerPreset",
        ...audioAnalyserPreset,
    }
}

export function createVideoAnalyzerPreset(videoAnalyserPreset: Omit<VideoAnalyzerPreset, "odataType">): VideoAnalyzerPreset {
    return {
        odataType: "#Microsoft.Media.VideoAnalyzerPreset",
        ...videoAnalyserPreset,
    }
}

export function createMp4Format(mp4Format: Omit<Mp4Format, "odataType">): Mp4Format {
    return {
        odataType: "#Microsoft.Media.Mp4Format",
        ...mp4Format,
    }
}

export function createTSFormat(tsFormat: Omit<TransportStreamFormat, "odataType">): TransportStreamFormat {
    return {
        odataType: "#Microsoft.Media.TransportStreamFormat",
        ...tsFormat,
    }
}

export function createSelectAudioTrackById(audioTrackById: Omit<SelectAudioTrackById, "odataType">): SelectAudioTrackById {
    return {
        odataType: "#Microsoft.Media.SelectAudioTrackById",
        ...audioTrackById,
    }
}

export function createSelectAudioTrackByAttribute(audioTrackByAttribute: Omit<SelectAudioTrackByAttribute, "odataType">): SelectAudioTrackByAttribute {
    return {
        odataType: "#Microsoft.Media.SelectAudioTrackByAttribute",
        ...audioTrackByAttribute,
    }
}

export function createInputFile(inputFile: Omit<InputFile, "odataType">): InputFile {
    return {
        odataType: "#Microsoft.Media.InputFile",
        ...inputFile,
    }
}

export function createJobInputAsset(inputAsset: Omit<JobInputAsset, "odataType">): JobInputAsset  {
    return {
        odataType: "#Microsoft.Media.JobInputAsset",
        ...inputAsset,
    }
}

export function createJobInputClip(inputAsset: Omit<JobInputClip, "odataType">): JobInputClip {
    return {
        odataType: "#Microsoft.Media.JobInputClip",
        ...inputAsset,
    }
}


export function createJobInputHttp(inputHttp: Omit<JobInputHttp, "odataType">): JobInputHttp{
    return {
        odataType: "#Microsoft.Media.JobInputHttp",
        ...inputHttp,
    }
}

export function createJobOutputAsset(outputAsset: Omit<JobOutputAsset, "odataType">): JobOutputAsset {
    return {
        odataType: "#Microsoft.Media.JobOutputAsset",
        ...outputAsset,
    }
}

export function createJobInputSequence(jobInputSequence: Omit<JobInputSequence, "odataType">): JobInputSequence {
    return {
        odataType: "#Microsoft.Media.JobInputSequence",
        ...jobInputSequence,
    }
}


export function createJobInputs(jobInputs: Omit<JobInputs, "odataType">): JobInputs {
    return {
        odataType: "#Microsoft.Media.JobInputs",
        ...jobInputs,
    }
}

export function createVideoOverlay(videoOverlay: Omit<VideoOverlay, "odataType">): VideoOverlay {
    return {
        odataType: "#Microsoft.Media.VideoOverlay",
        ...videoOverlay,
    }
}