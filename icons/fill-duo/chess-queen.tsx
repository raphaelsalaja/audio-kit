import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChessQueen({
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
          d="m3.3889,13h11.2215l.706-.7334c1.0381-1.0918,1.4248-2.6318,1.0342-4.1196-.2041-.7798-.6533-1.5044-1.2646-2.0405-1.0469-.918-2.4111-1.2905-3.7402-1.021-.9248.187-1.7393.6567-2.3486,1.3354-.0244-.0269-.0488-.0537-.0742-.0801-.791-.834-1.8594-1.3091-3.0088-1.3389-1.1514-.0342-2.2412.3901-3.0742,1.1816-.833.791-1.3086,1.8599-1.3389,3.0088-.0293,1.1494.3906,2.2412,1.1855,3.0776l.7024.73Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.5947,13H3.4053l-.9285,1.1514c-.4268.5293-.5107,1.2393-.2168,1.853.293.6143.8984.9956,1.5791.9956h10.3217c.6807,0,1.2861-.3813,1.5791-.9956.2939-.6138.21-1.3237-.2168-1.853l-.9285-1.1514Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7,3.5h1.25v2.2666c.2402.167.4668.3569.6729.5742.0254.0264.0498.0532.0742.0801.2225-.2478.4803-.4568.7529-.6453v-2.2756h1.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.25V.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.25h-1.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChessQueen;
