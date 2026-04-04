import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4({
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
          d="M15.817,7.876L4.351,1.922c-.453-.234-.997-.175-1.39,.148-.392,.324-.552,.849-.408,1.336l1.435,4.844h4.898c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H3.988l-1.435,4.844c-.145,.488,.016,1.012,.408,1.336,.232,.191,.518,.29,.806,.29,.199,0,.399-.047,.584-.143l11.466-5.954c.421-.219,.683-.649,.683-1.124s-.262-.905-.683-1.124Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperPlane4;
