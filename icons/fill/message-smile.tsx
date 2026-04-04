import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageSmile({
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
          d="M14.25,1.5H3.75c-1.517,0-2.75,1.233-2.75,2.75v7c0,1.517,1.233,2.75,2.75,2.75h1.25v2.25c0,.288,.165,.551,.425,.676,.104,.05,.215,.074,.325,.074,.167,0,.333-.056,.469-.165l3.544-2.835h4.487c1.517,0,2.75-1.233,2.75-2.75V4.25c0-1.517-1.233-2.75-2.75-2.75Zm-2.068,8.182c-.85,.85-1.979,1.318-3.182,1.318s-2.332-.468-3.182-1.318c-.293-.293-.293-.768,0-1.061,.294-.293,.769-.292,1.061,0,1.133,1.133,3.109,1.133,4.242,0,.293-.293,.768-.293,1.061,0,.293,.292,.293,.768,0,1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MessageSmile;
