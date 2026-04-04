import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleContent({
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
          d="M13.75,2H4.25c-1.517,0-2.75,1.233-2.75,2.75v11.5c0,.288,.165,.551,.425,.676,.103,.05,.214,.074,.325,.074,.167,0,.333-.056,.469-.165l3.544-2.835h7.487c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-3.75,8.5H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h4.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm2.25-3.5H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChatBubbleContent;
