import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stars({
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
          d="m13.107,8.839l-3.496-.508-1.563-3.168c-.254-.512-1.092-.512-1.346,0l-1.563,3.168-3.496.508c-.283.041-.518.239-.605.51-.089.271-.015.57.189.769l2.53,2.466-.598,3.482c-.048.282.067.566.299.734.229.167.537.189.789.057l3.128-1.645,3.128,1.645c.109.058.229.086.349.086.155,0,.311-.048.44-.143.231-.168.347-.452.299-.734l-.598-3.482,2.53-2.466c.204-.199.278-.498.189-.769-.088-.271-.322-.469-.605-.51Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.8389,7.9624c-.1953,0-.3896-.0757-.5371-.2266-.2891-.2964-.2832-.7715.0137-1.0605l.3232-.3149-2.3828-.3462c-.2451-.0356-.4561-.189-.5654-.4102l-1.0654-2.1597-.2451.4966c-.1836.3711-.6348.5249-1.0049.3403-.3711-.1831-.5234-.6328-.3408-1.0044l.918-1.8589c.127-.2559.3877-.418.6729-.418h0c.2852,0,.5459.1621.6729.418l1.5635,3.1685,3.4961.5083c.2832.041.5176.2388.6055.5103.0889.2715.0146.5698-.1895.769l-1.4111,1.3755c-.1455.1421-.335.2129-.5234.2129Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Stars;
