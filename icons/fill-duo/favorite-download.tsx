import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FavoriteDownload({
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
          d="m15.25,11c-.4141,0-.75.3359-.75.75v1.5c0,.6895-.5605,1.25-1.25,1.25H4.75c-.6895,0-1.25-.5605-1.25-1.25v-1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.5c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75v-1.5c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5.9434,8.438l-.4639,2.6846c-.0488.2808.0664.5649.2969.7334.2305.168.5381.1899.7891.0591l2.4346-1.271,2.4346,1.271c.1084.0566.2275.085.3467.085.1562,0,.3115-.0488.4424-.144.2305-.1685.3457-.4526.2969-.7334l-.4639-2.6846,1.9648-1.9019c.2061-.1992.2803-.4976.1924-.77-.0879-.272-.3232-.4707-.6064-.5112l-2.7207-.3926-1.2148-2.4463c-.2539-.5098-1.0898-.5098-1.3438,0l-1.2148,2.4463-2.7207.3926c-.2832.0405-.5186.2393-.6064.5112-.0879.2725-.0137.5708.1924.77l1.9648,1.9019Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default FavoriteDownload;
