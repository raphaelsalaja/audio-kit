import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Brush2({
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
          d="m15.2087,10H2.7913l-.6262,4.5088c-.0693.501.0811,1.0078.4131,1.3896.333.3823.8135.6016,1.3203.6016h10.2031c.5068,0,.9873-.2192,1.3203-.6016.332-.3818.4824-.8887.4131-1.3892l-.6263-4.5093Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4.3062,10h10.9025l-.2585-1.8608c-.167-1.208-1.1279-2.1724-2.335-2.3447l-1.6514-.2358.2295-2.395c.0596-.6167-.1455-1.2339-.5625-1.6924-.834-.918-2.4277-.918-3.2617,0-.417.4585-.6221,1.0757-.5625,1.6924l.2295,2.395-1.6504.2358c-1.208.1724-2.1689,1.1367-2.3359,2.3442l-.2585,1.8613h1.515Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.0231,16.5l.2239-2.6875c.0352-.4131-.2725-.7754-.6846-.8101-.4014-.0283-.7754.272-.8096.6851l-.2344,2.8125h1.5046Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.4814,16.5l-.2344-2.8125c-.0342-.4126-.3857-.7148-.8096-.6851-.4121.0347-.7197.397-.6846.8101l.2239,2.6875h1.5046Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Brush2;
