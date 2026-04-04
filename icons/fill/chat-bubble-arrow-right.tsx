import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleArrowRight({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M10,13.25c0-1.241,1.01-2.25,2.25-2.25h.264c-.009-.083-.014-.166-.014-.25,0-.601,.234-1.166,.659-1.591,.425-.425,.99-.659,1.591-.659s1.166,.234,1.591,.659l.159,.159V4.75c0-1.517-1.233-2.75-2.75-2.75H4.25c-1.517,0-2.75,1.233-2.75,2.75v11.5c0,.288,.165,.551,.425,.676,.104,.05,.215,.074,.325,.074,.167,0,.333-.056,.469-.165l3.544-2.835h3.876c-.084-.236-.138-.486-.138-.75Z"
          fill={fill}
        />
        <path
          d="M15.28,10.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.22,1.22h-3.189c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.189l-1.22,1.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.5-2.5c.293-.293,.293-.768,0-1.061l-2.5-2.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ChatBubbleArrowRight;
