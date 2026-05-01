export interface AboutResponse {
    data: {
        title: string
        blocks: Blocks[]
    }
}

type Blocks = RichTextBlock | MediaBlock

interface RichTextBlock {
    __component: 'shared.rich-text'
    body: string
}

interface MediaBlock {
    __component: 'shared.media'
    file: {
        url: string
    }
}