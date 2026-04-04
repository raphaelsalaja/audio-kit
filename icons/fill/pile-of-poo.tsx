import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PileOfPoo({
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
        <circle
          cx="1.75"
          cy="4.2507"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <path
          d="m14.888,5.0007c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061.19-.19.19-.5,0-.689-.775-.775-.775-2.036,0-2.811.293-.293.768-.293,1.061,0,.293.293.293.768,0,1.061-.19.19-.19.5,0,.689.775.775.775,2.036,0,2.811-.146.146-.338.22-.53.22h-.001Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.249,10.2488c.17-.357.251-.736.251-1.061,0-1.211-.91-2.203-2.117-2.305l-.277-.024-2.8875-.2464s.5701-.9801,3.0481-.8359c-.2705-1.3412-1.1476-2.0167-2.1166-2.1377l-1.745-.217c-1.535-.19-1.77-.71-1.911-1.771-.033-.252-.192-.47-.422-.579-.229-.108-.498-.094-.715.04-.08.049-1.961,1.233-1.961,3.284,0,.719.214,1.305.495,1.788-.652.005-1.292.242-1.778.688-.548.503-.862,1.219-.859,1.902-.001.013.0068.1626.0058.1966.8637-.241,3.1578-.4351,4.3652,1.0294h-2.651c-.506,0-.905.121-1.343.346-.964.5-1.631,1.495-1.631,2.654,0,1.206.799,3,3,3h10c1.654,0,3-1.346,3-3,0-.94-.496-2.225-1.751-2.752v.001Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PileOfPoo;
