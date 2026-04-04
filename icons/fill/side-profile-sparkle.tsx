import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileSparkle({
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
          d="m17.099,9.2991l.001.001-1.354-1.8062c-.072-1.9438-.972-3.7488-2.49-4.9839-1.587-1.2891-3.665-1.783-5.701-1.3591-2.55.5332-4.62,2.6021-5.154,5.1511-.599,2.8679.639,5.7,3.099,7.1909v2.7561c0,.4141.336.75.75.75h5c.414,0,.75-.3359.75-.75v-1.75h.89c1.435,0,2.64-1.1211,2.742-2.551l.078-1.075,1.068-.427c.217-.0862.381-.269.443-.4941.063-.2249.019-.4661-.122-.6528Zm-5.509-1.2473l-1.515.5095-.505,1.5256c-.083.2468-.312.4131-.57.4131s-.488-.1663-.57-.4131l-.505-1.5256-1.515-.5095c-.2451-.0815-.41-.3135-.41-.5732s.165-.4915.41-.573l1.515-.5095.505-1.5259c.164-.4937.975-.4937,1.139,0l.505,1.5259,1.515.5095c.245.0825.411.3132.411.573s-.165.4917-.41.5732Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SideProfileSparkle;
