import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wrench({
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
          d="M12.082,1.739c-.233-.115-.508-.102-.728,.036-.22,.137-.354,.377-.354,.637V7.25c0,.414-.336,.75-.75,.75h-2.5c-.414,0-.75-.336-.75-.75V2.412c0-.259-.134-.5-.354-.637-.22-.138-.496-.151-.728-.036-2.417,1.191-3.918,3.59-3.918,6.261,0,2.526,1.33,4.805,3.5,6.056v2.194c0,.414,.336,.75,.75,.75h5.5c.414,0,.75-.336,.75-.75v-2.194c2.17-1.25,3.5-3.53,3.5-6.056,0-2.671-1.501-5.07-3.918-6.261Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wrench;
