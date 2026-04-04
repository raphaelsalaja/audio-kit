import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageForward({
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
          d="M14.25,1.5H3.75c-1.519,0-2.75,1.231-2.75,2.75v1.75c0,.552,.448,1,1,1h6.939l-1.47-1.47c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.75,2.75c.293,.293,.293,.768,0,1.061l-2.75,2.75c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l1.47-1.47H2c-.552,0-1,.448-1,1v1.75c0,1.519,1.231,2.75,2.75,2.75h1.25v2.25c0,.288,.165,.551,.425,.676,.103,.05,.214,.074,.325,.074,.167,0,.333-.056,.469-.165l3.544-2.835h4.487c1.519,0,2.75-1.231,2.75-2.75V4.25c0-1.519-1.231-2.75-2.75-2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MessageForward;
