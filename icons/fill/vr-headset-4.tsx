import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset4({
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
          d="M15.405,5.28c-1.458-1.181-4.071-1.28-6.405-1.28s-4.947,.099-6.404,1.28c-1.539,1.246-2.053,2.609-1.772,4.705,.27,2.018,1.515,3.474,3.33,3.894,1.712,.397,3.039-.242,3.714-.972,.112-.123,.216-.241,.313-.354,.428-.494,.564-.619,.819-.619s.392,.125,.818,.617c.099,.114,.202,.233,.315,.356,.53,.575,1.468,1.094,2.678,1.094,.326,0,.672-.038,1.034-.122,1.816-.42,3.062-1.876,3.331-3.894,.28-2.096-.233-3.459-1.771-4.705Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VrHeadset4;
