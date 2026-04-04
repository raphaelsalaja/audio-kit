import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Navigation({
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
          d="m13.6431,15.3926l-3.6187-7.7856v-.0005c-.1875-.4028-.5801-.6533-1.0244-.6533s-.8369.2505-1.0244.6538l-3.6182,7.7847c-.2041.438-.1069.9575.2412,1.292.2153.207.4976.3149.7827.3149.1763,0,.3535-.0415.5171-.126l3.1016-1.5972,3.1011,1.5972c.4302.2207.9517.145,1.3003-.189.3481-.3345.4453-.854.2417-1.291Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m2.9761,13.7764c-.2417,0-.479-.1167-.6235-.3325-.8848-1.3203-1.3525-2.8569-1.3525-4.4438C1,4.5889,4.5889,1,9,1s8,3.5889,8,8c0,1.5562-.4712,3.084-1.3633,4.4185-.2305.3457-.6968.436-1.04.207-.3447-.23-.437-.6958-.207-1.04.7266-1.0874,1.1104-2.3271,1.1104-3.5854,0-3.584-2.916-6.5-6.5-6.5s-6.5,2.916-6.5,6.5c0,1.2886.3799,2.5366,1.0986,3.6089.2305.3442.1387.8101-.2056,1.0405-.1279.0859-.2734.127-.417.127Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Navigation;
