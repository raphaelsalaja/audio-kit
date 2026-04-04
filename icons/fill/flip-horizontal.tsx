import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipHorizontal({
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
        <circle cx="9" cy="2.75" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="5.875" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="12.125" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="15.25" fill={secondaryfill} r=".75" />
        <path
          d="M3.084,4.937c-.372-.333-.887-.413-1.344-.21-.456,.204-.74,.641-.74,1.141v6.264c0,.5,.284,.938,.74,1.141,.167,.075,.342,.111,.515,.111,.3,0,.593-.11,.828-.321l3.502-3.132c.264-.237,.415-.576,.415-.931s-.151-.694-.416-.932l-3.5-3.131Zm-.584,6.635V6.428l2.876,2.572-2.876,2.572Z"
          fill={fill}
        />
        <path
          d="M16.26,4.727c-.457-.205-.971-.124-1.344,.21l-3.501,3.132c-.264,.237-.415,.576-.415,.931s.151,.694,.416,.932l3.5,3.131c.236,.211,.529,.321,.829,.321,.173,0,.348-.037,.515-.111,.456-.204,.74-.641,.74-1.141V5.868c0-.5-.284-.938-.74-1.141Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FlipHorizontal;
